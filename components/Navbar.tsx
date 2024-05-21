'use client'
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Navbar = () => {

  const router = useRouter()

  return (
    <nav className="flexBetween  max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src="/diXcomplicar.png"
          alt="logo"
          width={74}
          height={29}
        ></Image>
      </Link>
      <ul className="gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-whiterino-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-orange-30"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Mete conversa"
          onClick={() => router.push('mailto:dixcomplicar@gmail.com')}
          icon="/user.svg"
          variant="btn_dark_green_orange_border"
        />
      </div>

      {/*<Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        />*/}
    </nav>
  );
};

export default Navbar;
