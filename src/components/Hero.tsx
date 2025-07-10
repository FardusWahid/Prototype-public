import { ArrowRight, CircleCheck, Radio, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative z-10 w-full flex flex-col items-center text-center space-y-10 py-10 sm:py-20 min-h-dvh">
      <Link
        href="/#waitlist"
        className="inline-flex items-center rounded-full border border-zinc-400/50 dark:border-gray-700/80 bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-6"
      >
        <Sparkles className="mr-2 h-5 w-5" /> Launching Soon — Join the Waitlist
      </Link>

      <h1 className="text-4xl font-black md:tracking-tight sm:text-5xl md:text-6xl  lg:text-7xl mb-4 max-w-5xl">
        University Course & Event Management Software
      </h1>
      <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
       A Simple Fullstack Prototype webapp for CVIT made by Fardus wahid with Next.js typescript Shadcn UI Drizzle & Postgresql
      </p>
      <div className="flex flex-col justify-center gap-3 lg:gap-5 sm:flex-row w-10/12 sm:w-auto">
        <Button className="sm:w-[300px]">
          <span className="px-5 flex items-center gap-2">
            Get Early Access <ArrowRight />
          </span>
        </Button>
        <Button variant={"secondary"} className="sm:w-[300px]">
          <span className="flex items-center gap-2">
            {" "}
            Live Preview <Radio />
          </span>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-7 md:gap-12 lg:gap-20 pt-8">
        <div className="flex items-center gap-2">
          <CircleCheck />
          <span className="dark:text-gray-200">Free 14-day trial</span>
        </div>
        <div className="flex items-center gap-2">
          <CircleCheck />
          <span className="dark:text-gray-200">No credit card required</span>
        </div>
        <div className="flex items-center gap-2">
          <CircleCheck />
          <span className="dark:text-gray-200">Cancel anytime</span>
        </div>
      </div>
    </div>
  );
}
