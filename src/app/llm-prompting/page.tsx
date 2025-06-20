const page = () => {
    return (
        <div className="container mx-auto px-20 py-24 items-center">
            <div className="p-4 rounded-lg">
                <textarea
                    className="w-full h-32 p-2 bg-[#252525] rounded-lg border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400"
                    placeholder="Type here..."
                />
            </div>
            <div className="grid grid-cols-2 gap-12 pb-20">
                <div>
                    <div className="text-white">Thinking Process</div>
                    <div className="text-white p-2 rounded-lg border border-gray-600 text-base font-normal mt-2">
                        The user inputs “a futuristic city at night.” DeepSeek immediately begins analyzing the prompt, identifying key concepts such as “futuristic,” “city,” and “night.” It recognizes that the prompt is too vague—“futuristic” could mean cyberpunk, utopian, or high-tech, while “city” could refer to a wide skyline, a street-level view, or a sprawling metropolis. To optimize the prompt, DeepSeek retrieves contextual knowledge from its dataset, enhancing it with more descriptive elements. It restructures the input into a more precise format, ensuring the diffusion model fully understands the user’s intent. The AI refines the prompt into: “A breathtaking cyberpunk city at night, illuminated by neon lights and holographic billboards, with towering skyscrapers, flying cars, and a futuristic urban glow.” Now, DeepSeek evaluates the model’s response. If the generated image lacks key details—perhaps the atmosphere is too dark, or the skyline isn’t detailed enough—it iterates, adjusting brightness, refining object placement, or enhancing stylistic choices to align with the intended vision. The final output is a stunning, highly detailed futuristic cityscape, perfectly crafted from an optimized, AI-friendly prompt.
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-white font-normal text-xl">“A sprawling cyberpunk city at night, filled with towering glass skyscrapers, neon-lit streets, flying vehicles, and glowing billboards. The sky is dark with a subtle purple haze, reflecting the city’s vibrant lights. The scene is detailed and cinematic, with a futuristic yet gritty atmosphere.”</p>

                    <div className="mt-40">
                        <button className="box w-full py-2 ">AI Prompt Assist</button>
                        <button className="box w-full py-2 mt-4">Generate Now</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default page;