import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Stack } from "@/sections/stack";
import { Blog } from "@/sections/blog";
import { Experience } from "@/sections/experience";
import { Projects } from "@/sections/projects";
import { Certification } from "@/sections/certification";
import { Education } from "@/sections/education";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="px-4 sm:px-6">
      <div className="mx-auto md:max-w-3xl py-0 space-y-8 sm:space-y-8 md:space-y-8 border-x">
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Education />
        <Certification />
        {/* <Blog /> */}
      </div>
    </div>
  );
}
