"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Theme } from "./theme";
const navItems = ["home", "feature", "pricing", "about", "contact"];

const MobileMenu = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const panelTL = useRef(gsap.timeline({ paused: true }));

  useGSAP(() => {
    const linksAndTheme = gsap.utils.toArray(".stagger-item");

    panelTL.current
      .to(menuRef.current, {
        x: "0%",
        duration: 0.2,
        ease: "power1.inOut",
        opacity: 1,
      })
      .from(
        linksAndTheme,
        {
          x: 20,
          y: 10,
          opacity: 0,
          stagger: 0.08,
          duration: 0.2,
          ease: "power2.out",
        },
        "<0.05"
      );
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power1.inOut",
        onComplete: () => {
          document.body.style.overflow = "";
          gsap.set(menuRef.current, { x: "100%" });
          setIsOpen(false);
        },
      });
    } else {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
      panelTL.current.play(0);
    }
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="relative z-50 px-5 flex flex-col items-end justify-center w-12 h-12 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <span
          className={cn(
            "block w-6 h-0.5 bg-foreground transition-transform",
            isOpen && "rotate-45 translate-y-1.5"
          )}
        />
        <span className={cn("my-[3px]", isOpen && "my-[5px]")} />
        <span
          className={cn(
            "block w-4 h-0.5 bg-foreground transition-transform",
            isOpen && "-rotate-45 -translate-y-1.5 w-6"
          )}
        />
      </button>

      <div
        ref={menuRef}
        onClick={toggleMenu}
        className="fixed h-dvh top-0 right-0 w-full max-w-full bg-background/95 backdrop-blur-sm text-foreground transform translate-x-full z-40 flex flex-col items-center justify-center gap-8"
      >
        {navItems.map((item) => (
          <Link
            key={item}
            href={`/#${item}`}
            className="stagger-item text-3xl font-semibold capitalize"
          >
            {item}
          </Link>
        ))}

        <section className="stagger-item text-3xl font-semibold capitalize flex items-center gap-2">
          Theme <Theme />
        </section>
      </div>
    </>
  );
};

export default MobileMenu;
