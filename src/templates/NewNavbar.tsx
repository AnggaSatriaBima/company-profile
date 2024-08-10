"use client";
import { useState } from "react";
import { AppConfig } from "../utils/AppConfig";
import { usePathname } from "next/navigation";
export default function NavbarNew() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 px-1 backdrop-blur-lg border-b border-neutral-700/80 blur-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://www.bmw.co.za/content/dam/bmw/common/images/logo-icons/BMW/BMW_Grey-Colour_RGB.SVG.asset.1697707041685.SVG"
            className="h-10 w-10"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl whitespace-nowrap text-gray-700 font-serif">
            {AppConfig.site_name}
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => {
            !open ? setOpen(true) : setOpen(false);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={
            !open
              ? `hidden w-full md:block md:w-auto text-gray-400" id="navbar-default`
              : `w-full md:block md:w-auto text-gray-400" id="navbar-default`
          }
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <a
                href="/"
                className={
                  path == "/"
                    ? `block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-700 `
                    : `block py-2 px-3  rounded md:bg-transparent md:p-0 text-gray-700`
                }
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={
                  path == "/about"
                    ? `block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-700 `
                    : `block py-2 px-3  rounded md:bg-transparent md:p-0 text-gray-700`
                }
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/product"
                className={
                  path == "/product"
                    ? `block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-700 `
                    : `block py-2 px-3  rounded md:bg-transparent md:p-0 text-gray-700`
                }
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/teams"
                className={
                  path == "/teams"
                    ? `block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-700 `
                    : `block py-2 px-3  rounded md:bg-transparent md:p-0 text-gray-700`
                }
              >
                Teams
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className={
                  path == "/blog"
                    ? `block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-700 `
                    : `block py-2 px-3  rounded md:bg-transparent md:p-0 text-gray-700`
                }
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
