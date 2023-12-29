// "use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "../../constance/index";
import Image from "next/image";

const BurgerMenu = () => {
    const [showModule, setshowModule] = useState(false); /* Burger icon arr */

    return (
        <div>
            <button
                onClick={() => {
                    setshowModule(true);
                }}
            >
                <Image
                    src="menu.svg"
                    alt="menu"
                    width={32}
                    height={32}
                    className="inline-block cursor-pointer lg:hidden"
                />
            </button>
            {showModule && (
                <div className="  fixed border-red z-10000 inset-0 bg-inherit ">
                    <ul className=" mx-3 origin-top-left absolute top-16 right-0 flex flex-col text-center justify-center  w-72 h-60 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 px-2 py-2">
                        <button
                            onClick={(first) => {
                                setshowModule(false);
                            }}
                        >
                            <Image
                                src="close.svg"
                                alt="menu"
                                width={32}
                                height={32}
                                className="inline-block cursor-pointer lg:hidden absolute top-0 right-0 bg-red-600"
                            />
                        </button>
                        {NAV_LINKS.map((link) => (
                            <Link
                                href={link.href}
                                key={link.key}
                                className=" regular-16 text-black pb-1.5  hover:font-bold rounded-2xl"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
export default BurgerMenu;
