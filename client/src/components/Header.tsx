import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Image src="/white-box-logo.svg" width="150" height="150" alt="logo" className="ml-10"></Image>
                <nav className="md:ml-auto flex flex-wrap items-center text-base font-semibold justify-center header-text">
                    <Link href="#about" className="mr-10 text-white">About</Link>
                    <Link href="#research" className="mr-10 text-white">Research</Link>
                    <Link href="" className="mr-10 text-white">Login</Link>

                </nav>

            </div>
        </header>
    )
}
export default Header

