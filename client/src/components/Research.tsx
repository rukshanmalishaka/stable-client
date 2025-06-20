const Research = () => {
    return (
        <div id="research">
            <h2 className="text-3xl font-semibold text-white flex items-center justify-center mb-10">
                Research
            </h2>
            
            <div className="container mx-auto px-20">
                <p className="text-white font-normal text-xl mb-10">
                    AI-generated images are becoming increasingly prevalent, but they often lack traceability and transparency. Without clear source tracking, it is difficult to determine where an AI model pulls data from or how much influence specific datasets have on the final output. WHITEBOX addresses this issue by introducing a system that enables real-time dataset tracking, source backtracing, and metadata documentation, making AI image generation more transparent, accountable, and ethical.
                </p>

                {/* Grid Layout for Two Sections in One Row */}
                <div className="grid grid-cols-2 gap-12 pb-20">
                    
                    {/* First Column */}
                    <div>
                        <h2 className="text-3xl font-semibold text-white">
                            Transparency in AI-Generated Images
                        </h2>
                        <p className="text-white font-normal text-xl mt-4">
                            As AI tools continue to generate realistic images, concerns about ownership, bias, and misinformation are growing. Without transparency, AI-generated images can be misused in misinformation campaigns, deepfake technology, and copyright disputes. Artists and content creators also face challenges in proving whether an AI model has used their work without permission. WHITEBOX aims to bridge this gap by providing clear, traceable records of dataset sources, ensuring that AI-generated content remains ethical and trustworthy.
                        </p>
                    </div>

                    {/* Second Column */}
                    <div>
                        <h2 className="text-3xl font-semibold text-white">
                            Ethics in AI Development
                        </h2>
                        <p className="text-white font-normal text-xl mt-4">
                            The ethical implications of AI-generated content extend beyond transparency. Questions around consent, privacy, and fair usage are also crucial. By implementing dataset tracking, WHITEBOX ensures that AI-generated content adheres to ethical guidelines, preventing unauthorized data usage and fostering responsible AI innovation.
                        </p>
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-12 pb-20">
                <div>
                        <h2 className="text-3xl font-semibold text-white">
                        Ethical and AI Transparency Considerations
                        </h2>
                        <p className="text-white font-normal text-xl mt-4">
                        AI-generated images raise ethical questions about data ownership, bias, and accountability. Many AI models are trained on vast datasets without clear consent from content creators, leading to potential copyright concerns. WHITEBOX promotes AI ethics by ensuring full traceability, helping users understand how an AI model constructs an image and whether biased datasets or unverified sources are being used. 
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-12 pb-20">
                <div>
                        <h2 className="text-3xl font-semibold text-white">
                        Technical Process
                        </h2>
                        <p className="text-white font-normal text-xl mt-4">
                        TEXT BY THE DEVELOPER
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Research;
