import { AppConfig } from '../utils/AppConfig';
import Link from 'next/link';

const Navbar = () => (
    <nav className="sticky top-0 z-50 py-2 px-1 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-1 mx-auto relative lg:text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0 hover:cursor-pointer justify-between">
                    <div>
                        <Link href="/">
                            <img className="h-12 w-16 ml-1" src={"https://www.bmw.co.za/content/dam/bmw/common/images/logo-icons/BMW/BMW_Grey-Colour_RGB.SVG.asset.1697707041685.SVG"} alt="Logo" />
                        </Link>
                    </div>
                    <div className='text-xl'>
                        {AppConfig.site_name}
                    </div>
                </div>
                <ul className=" ">
                    <li className='hover: cursor-pointer text-gray-600 font-semibold'>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className='hover: cursor-pointer text-gray-600 font-semibold'>
                        <Link href="/about">
                            About Us
                        </Link>
                    </li>
                    <li className='hover: cursor-pointer text-gray-600 font-semibold'>
                        <Link href="/product">
                            Product
                        </Link>
                    </li>
                    <li className='hover: cursor-pointer text-gray-600 font-semibold'>
                        <Link href="/teams">Teams</Link>
                    </li>
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a
                        href="https://api.whatsapp.com/send?phone=6287761514684"
                        target="_blank"
                        className="bg-gradient-to-r from-[#1c69d4] to-primary-500 py-2 px-3 rounded-md text-white "
                    >
                        Buy Now..
                    </a>
                </div>
                <div className="lg:hidden flex justify-between">
                </div>
            </div>
        </div>
    </nav>
);

export { Navbar };
