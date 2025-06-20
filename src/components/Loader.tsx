import Image from "next/image";

const Loader = () => {
    return (
        <div className="container mx-auto px-20 py-24 flex justify-center items-center">
            <div className="grid grid-cols-2 gap-48 justify-center items-center">
            <div className="flex justify-center items-center flex-col">
                    <Image src="/footer.svg" alt="Footer Logo" width={400} height={400} />
                    <div className="w-full mt-4 h-1 bg-transparent border-t-2 border-grey-100 overflow-hidden">
                        <div className="h-full bg-white animate-loadingLine" />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image src="/box-1.png" alt="Footer Logo" width={400} height={400} />
                </div>
            </div>
        </div>
    )
}

export default Loader;
