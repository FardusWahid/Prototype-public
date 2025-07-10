"use client";
import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Theme({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      className={clsx("cursor-pointer", className)}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {mounted && (
        <>
          {theme === "dark" ? (
            <Sun className={className} />
          ) : (
            <Moon className={className} />
          )}
        </>
      )}
    </button>
  );
}
