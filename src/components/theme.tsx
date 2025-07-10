"use client";
import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function Theme({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={clsx("cursor-pointer", className)}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
