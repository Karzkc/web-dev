import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
    return (
        <div className="navbar w-full h-20 px-8 fl text-white border-b border-gray-800">
            <div className="nav-items w-full max-w-7xl h-full flex items-center justify-between">

                <div className="logo flex items-center w-[20%]">
                    <Link href={"/"}>
                        <Image src="/logo/logo.png" alt="Logo" width={80} height={80} />
                    </Link>
                </div>

                <div className="center-nav fl space-x-6 w-[60%] text-lg text-gray-300">
                    <Link href={"/"}><div className="hover:text-white cursor-pointer">Home</div>
                    </Link>
                    <Link href={"/about"}><div className="hover:text-white cursor-pointer">About</div>
                    </Link>
                    <Link href={"/contact"}><div className="hover:text-white cursor-pointer">Contact</div>
                    </Link>
                </div>

                <div className="right-nav flex items-center justify-end space-x-4 w-[20%] text-sm text-gray-300">
                    <Link href="https://github.com/karzkc" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer">
                        <div className="hover:text-white cursor-pointer "><FaGithub /></div>
                    </Link>
                    <Link href="https://twitter.com/karzkc0803" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer">
                        <div className="hover:text-white cursor-pointer "><FaXTwitter /></div>
                    </Link>
                    <Link href="https://linkedin.com/in/kartik-khiriya-483a81319" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer">
                        <div className="hover:text-white cursor-pointer "><FaLinkedinIn /></div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar
