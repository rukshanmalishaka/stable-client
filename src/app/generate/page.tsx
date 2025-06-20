'use client';
import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

const API_BASE = 'https://213.180.0.35:47909';
const DOWNLOAD_BASE = `${API_BASE}/download`;

const axiosClient = axios.create({
  baseURL: API_BASE,
  headers: { Accept: 'application/json' },
});

const base64Encode = (str: string) => btoa(unescape(encodeURIComponent(str)));

const Page = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setGeneratedImage('');
      setSelectedImages([]);

      const formData = new FormData();
      formData.append('prompt', prompt);
      formData.append('strength', '0.9');

      const response = await axiosClient.post('/generate/', formData);
      setGeneratedImage(response.data.generated_image);
      setSelectedImages(response.data.selected_images);
    } catch (err) {
      console.error('Error generating image:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
    } catch (err) {
      console.error('Download error:', err);
    }
  };

  const handleDownloadSources = async () => {
    for (const src of selectedImages) {
      const base64Path = base64Encode(src);
      const url = `${DOWNLOAD_BASE}/source/${base64Path}`;
      const filename = src.split('/').pop() || 'source-image.jpg';
      await handleDownload(url, filename);
    }
  };

  const getDownloadUrl = (path: string, isSource = false) => {
    const base64Path = base64Encode(path);
    return `${DOWNLOAD_BASE}/${isSource ? `source/${base64Path}` : base64Path}`;
  };

  return (
    <div className="container mx-auto px-20 py-24 items-center">
      <div className="flex mb-10">
        <div className="flex-3/4 rounded-lg">
          <textarea
            className="w-full h-32 p-2 bg-[#252525] rounded-lg border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400 text-white"
            placeholder="Type here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <button
            className={`px-4 py-2 box ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Again'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 pb-20">
        <div className="text-white mb-8">
          <span className="text-base font-light block mb-4">
            Sources used for this generation...
          </span>
          <div className="grid grid-cols-5 gap-2">
            {loading && (
              <div className="text-gray-400 col-span-5">Loading sources...</div>
            )}
            {!loading &&
              selectedImages.map((src, index) => (
                <div key={index} className="aspect-square">
                  <img
                    src={getDownloadUrl(src, true)}
                    alt={`Source ${index}`}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
          </div>

          {!loading && selectedImages.length > 0 && (
            <button
              onClick={handleDownloadSources}
              className="box w-40 px-2 py-2 mt-4 inline-block text-center"
            >
              Download Sources
            </button>
          )}
        </div>

        <div className="mt-2">
          {loading && <div className="text-gray-400 text-lg">Generating image...</div>}
          {!loading && generatedImage && (
            <>
              <Image
                src={`${DOWNLOAD_BASE}/${generatedImage}`}
                alt="Generated"
                width={500}
                height={500}
                className="rounded"
              />
              <button
                onClick={() =>
                  handleDownload(`${DOWNLOAD_BASE}/${generatedImage}`, generatedImage)
                }
                className="box px-2 py-2 mt-4 inline-block text-center"
              >
                Download Image
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
