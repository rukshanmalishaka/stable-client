const userPrompting = () => {
    return (
        <div className="container mx-auto px-20 py-24 items-center">
            <div className="p-4 rounded-lg">
                <textarea
                    className="w-full h-32 p-2 bg-[#252525] rounded-lg border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400"
                    placeholder="Type here..."
                />
            </div>
            <div className="flex justify-end gap-4 mt-2 ">
                <button className="box px-4 py-2 ">AI Prompt Assist</button>
                <button className="box px-4 py-2">Generate Now</button>
            </div>
            <div className="text-white font-medium text-2xl mb-5 mt-5">What is AI prompt assist</div>
            <span className="font-normal text-white text-base ">Assisted Prompting is an AI-driven enhancement where a Large Language Model (LLM) refines and optimises user input to generate the best possible output. The LLM analyses, restructures, and enhances the prompt, ensuring that the diffusion model accurately grasps the intent to create a well-composed image. By intelligently modifying prompts, Assisted Prompting bridges the gap between user intent and AI interpretation, resulting in high-quality, visually compelling AI-generated images.</span>
        </div>
    )
}
export default userPrompting;
