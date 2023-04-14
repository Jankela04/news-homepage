import logo from "/logo.svg";
import openMenu from "/icon-menu.svg";
import closeMenu from "/icon-menu-close.svg";

import { useEffect, useState } from "react";

export const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNavbar = () => {
        setIsNavOpen((prev) => !prev);
    };

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 768 && setIsNavOpen(false)
        );

        return () => {
            window.removeEventListener(
                "resize",
                () => window.innerWidth >= 768 && setIsNavOpen(false)
            );
        };
    }, []);

    return (
        <nav className="relative flex justify-between py-10">
            <a href="/">
                <img src={logo} alt="Logo" />
            </a>
            <button className="z-20 md:hidden" onClick={toggleNavbar}>
                {isNavOpen ? (
                    <img src={closeMenu} alt="Close Menu" />
                ) : (
                    <img src={openMenu} alt="Open Menu" />
                )}
            </button>
            <div
                className={
                    isNavOpen
                        ? "absolute right-0 top-0 z-10 flex h-screen w-2/3 flex-col gap-5 bg-white pt-48 md:flex"
                        : "hidden gap-8 md:flex"
                }
            >
                <Links />
            </div>
            {isNavOpen && (
                <div
                    className="fixed left-0 top-0 h-screen w-2/3 bg-black opacity-50"
                    onClick={toggleNavbar}
                ></div>
            )}
        </nav>
    );
};

const Links = () => {
    return (
        <>
            <a
                className="ml-4 text-lg font-semibold text-black hover:text-primary-orange md:ml-0 md:font-normal md:text-neutral-darkGrayBlue"
                href="/"
            >
                Home
            </a>
            <a
                className="ml-4 text-lg  font-semibold text-black hover:text-primary-orange md:ml-0 md:font-normal md:text-neutral-darkGrayBlue"
                href="/"
            >
                New
            </a>
            <a
                className="ml-4 text-lg  font-semibold text-black hover:text-primary-orange md:ml-0 md:font-normal md:text-neutral-darkGrayBlue"
                href="/"
            >
                Popular
            </a>
            <a
                className="ml-4 text-lg  font-semibold text-black hover:text-primary-orange md:ml-0 md:font-normal md:text-neutral-darkGrayBlue"
                href="/"
            >
                Trending
            </a>
            <a
                className="ml-4 text-lg  font-semibold text-black hover:text-primary-orange md:ml-0 md:font-normal md:text-neutral-darkGrayBlue"
                href="/"
            >
                Categories
            </a>
        </>
    );
};
