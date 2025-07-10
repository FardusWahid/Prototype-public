import { Button } from "@/components/ui/button";
import { seymour } from "@/lib/fonts";
import clsx from "clsx";
import { PlayCircle } from "lucide-react";

export default function About() {
  return (
    <div id="about" className="py-18">
      <section className="2xl:max-w-[1400px] m-auto">
        <h1
          className={clsx(
            "text-center text-4xl font-semibold",
            seymour.className
          )}
        >
          What Our Clients Say
        </h1>
        <p className="text-center pt-5">
          Join the growing community of coaching centers transforming
          <span className="sm:block"> their operations</span>
        </p>
      </section>
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
        <blockquote className="max-w-4xl mx-auto">
          <p className="mb-6 md:text-lg">
            <span className="font-semibold">Noor Sir,</span>{" "}
            <span className="text-muted-foreground">
              CEO at Noor Sir Physics
            </span>
          </p>

          <p className="text-xl sm:text-2xl md:text-3xl md:leading-normal">
            NS Physics transformed how we manage our coaching center. The
            seamless enrollment process, attendance tracking, and financial
            reporting save us hours every day, allowing us to focus on what
            matters most - teaching our students.
          </p>

          <footer className="mt-6 md:mt-10">
            <Button variant="secondary" className="h-fit">
              <PlayCircle className="!size-8" />
              Watch the Video
            </Button>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
