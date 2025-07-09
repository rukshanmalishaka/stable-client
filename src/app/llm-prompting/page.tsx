"use client";
import React, { useState } from "react";

export default function Page() {
  const [prompt, setPrompt] = useState("");
  const [thought, setThought] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setThought("");
    setResponse("");
    setLoading(true);

    const formData = new FormData();
    formData.append("prompt", prompt);

    try {
      const res = await fetch("http://213.180.0.35:47909/llm/", {
        method: "POST",
        body: formData,
      });

      const reader = res.body?.getReader();
      const decoder = new TextDecoder("utf-8");

      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        let lines = buffer.split("\n");
        buffer = lines.pop() || ""; // keep unfinished line

        for (let line of lines) {
          line = line.trim();
          if (!line) continue;

          try {
            // ✅ Strip the 'data:' prefix if present
            if (line.startsWith("data:")) {
              line = line.slice(5).trim();
            }

            const json = JSON.parse(line);
            if (json.thought) setThought((prev) => prev + json.thought);
            if (json.response) setResponse((prev) => prev + json.response);
          } catch (err) {
            console.warn("Failed to parse line:", line);
          }
        }
      }
    } catch (err) {
      console.error("Stream error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-20 py-24">
      <div className="p-4 rounded-lg">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full h-32 p-2 bg-[#252525] text-white rounded-lg border border-gray-600 focus:outline-none"
          placeholder="Type here..."
        />
      </div>

      <div className="grid grid-cols-2 gap-12 pb-20">
        <div>
          <div className="text-white">Thinking Process</div>
          <div className="text-white whitespace-pre-wrap mt-2 border border-gray-600 p-2 rounded-lg">
            {thought || "Waiting for AI..."}
          </div>
        </div>

        <div className="mt-6">
          <div className="text-white whitespace-pre-wrap text-lg">
            {response || "AI response will appear here..."}
          </div>
          <div className="mt-40">
            <button
              className="box w-full py-2"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
