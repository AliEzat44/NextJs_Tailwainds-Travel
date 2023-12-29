"use client"
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../../constance/index";
import MyButton from './../button/index';
import BurgerMenu from "./icon";


const NavBar = () => {

  // SCROLL TO TOP BUTTON
  const handleClickScroll = () => {
    const element = document.getElementById('section-scroll-toTop');
    if (element) {
      //  scroll smoothly to the section-scroll-toTop
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // SCROLL TO TOP BUTTON


  return (
    <nav className="relative border-2 flexBetween max-container padding-container drop-shadow-md

    z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" width={74} height={29} alt="logo" />
      </Link>
      <ul className=" hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className=" regular-16 text-black flexCenter cursor-pointer transition-all ease-in duration-100 pb-1.5  hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <MyButton
          type="button"
          title="Button"
          icon={"/user.svg"}
          variant="btn-dark-green" />
      </div>
      <BurgerMenu />

      {/* // SCROLL TO TOP BUTTON */}
      {/* <div className="Scroll2Top fixed">

        <button onClick={handleClickScroll}  > up </button>
      </div> */}
      {/* // SCROLL TO TOP BUTTON */}
    </nav>
  );
};
export default NavBar;
