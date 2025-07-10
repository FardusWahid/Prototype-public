"use client";
import { seymour } from "@/lib/fonts";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import type { NavProp } from "@/types/app";
import { isMobile } from "./ui/isMobile";
import dynamic from "next/dynamic";
const MobileMenu = dynamic(() => import("./mobileNav"), { ssr: false });
export default function Navbar() {
  const mobile = isMobile();
  const navItem = ["home", "feature", "pricing", "about"];

  const Navlink = ({ href, children }: NavProp) => (
    <Link href={href} className="md:px-5 lg:px-6 xl:px-7">
      <span className="text-[15px] capitalize font-semibold dark:font-medium">
        {children}
      </span>
    </Link>
  );
  Navlink.displayName = "Navlink";

  return (
    <div className="fixed w-full h-[61px] bg-background/80 backdrop-blur-2xl flex justify-between items-center will-change-transform transform-gpu z-20">
      <Link href="/" className="flex items-center px-2">
        <Image
          src={"/logo.png"}
          width={40}
          height={40}
          priority={true}
          alt="logo"
          className="shrink-0 dark:invert"
        />
        <h1 className={clsx("text-3xl font-black pt-2", seymour.className)}>
          Unify
        </h1>
      </Link>

      {mobile ? (
        <MobileMenu />
      ) : (
        <nav className="hidden md:flex items-center">
          {navItem.map((item, index) => (
            <Navlink href={`/#${item}`} key={index}>
              {item}
            </Navlink>
          ))}

          <aside className="px-5 lg:pl-10">
            <Link href="/api/auth/signin">
              <Button className="w-[100px] text-base tracking-wider font-semibold">
                Signin
              </Button>
            </Link>
          </aside>
        </nav>
      )}
    </div>
  );
}
