import Link from "next/link";
import WaitlistForm from "./Waitlist";
export default function Footer() {
  return (
    <div>
      <WaitlistForm />
      <footer id="contact" className="w-full border-t bg-background">
        <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] flex flex-col items-center justify-between gap-4 pb-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with{" "}
              <Link
                href="#"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Next.js
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                shadcn/ui
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <nav className="flex gap-4 md:gap-6">
              <Link
                target="_blank"
                href="https://github.com/FardusWahid"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Github-1
              </Link>
              <Link
                href="https://github.com/BiteMeApp"
                target="_blank"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Github-2
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; Build for Coder Vai's Coding challenge
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
