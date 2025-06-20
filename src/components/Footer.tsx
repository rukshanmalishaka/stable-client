import Image from "next/image";

const Footer = () => {
    return (
        <div className="container mx-auto px-20 py-24">
            {/* Flex container with space between items */}
            <div className="flex justify-between items-center">
                
                {/* Left Side - Image */}
                <div>
                    <Image src="/footer.svg" alt="Footer Logo" width={400} height={400} />
                </div>

                {/* Right Side - Text */}
                <div className="text-right">
                    <span className="text-base text-[#ADA7A7]">
                        © 2025 Heshan Kolitha Weeramanthi.<br/> 
                        All rights reserved.
                    </span>
                </div>

            </div>
        </div>
    );
};

export default Footer;
