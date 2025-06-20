const Hero = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-6xl text-6xl mb-4 font-semibold text-white">Unveiling the Origins
                            of Every Pixel
                        </h1>


                        <div className="box px-4 py-2 mt-2">Get Creating</div>


                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="/Box-3.jpg" />
                    </div>
                </div>
            </section>
        </div>

    )
}
export default Hero;