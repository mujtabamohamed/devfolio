import { GithubIcon } from "@/components/ui/github";
import { LinkedinIcon } from "@/components/ui/linkedin";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section className="space-y-8" id="about">
      {/* Social Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4 border-y">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/mujtaba-mohamed/"
          className="flex items-center justify-between border-b sm:border-r sm:border-b-0 p-4 sm:p-6 hover:bg-accent/15 transition-colors"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/tech-icons/LinkedIn.svg"
              alt="LinkedIn"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg border border-card bg-[#fff] flex-shrink-0"
            />

            <div className="flex flex-col">
              <div className="font-medium text-lg sm:text-xl">LinkedIn</div>
              <div className="text-xs text-muted-foreground">
                @mujtabamohamed
              </div>
            </div>
          </div>
          <ArrowUpRight className="h-6 w-6 flex-shrink-0" />
        </Link>

        <Link
          target="_blank"
          href="https://github.com/mujtabamohamed"
          className="flex items-center justify-between sm:border-l p-4 sm:p-6 hover:bg-accent/15 transition-colors"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/tech-icons/Github.svg"
              alt="GitHub"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg border border-card flex-shrink-0"
            />

            <div className="flex flex-col">
              <div className="font-medium text-lg sm:text-xl">GitHub</div>
              <div className="text-xs text-muted-foreground">
                @mujtabamohamed
              </div>
            </div>
          </div>
          <ArrowUpRight className="h-6 w-6 flex-shrink-0" />
        </Link>
      </div>

      {/* About Content */}
      <div className="border-b ">
        <h2 className="text-2xl md:text-3xl font-semibold border-y px-4 md:px-6">
          About
        </h2>

        <ul className="space-y-2 text-sm leading-relaxed px-4 py-4 md:px-6 md:py-4 text-foreground list-disc list-outside ml-4">
          <p className="marker:text-muted-foreground pl-0 marker:text-xs">
            Hi there! I am <strong>Mujtaba</strong>, and I like to build things.
            I am a <strong>full-stack developer</strong> with expertise in
            building AI-driven, scalable applications. I take pride in turning
            manual, error-prone processes into{" "}
            <strong>something automated and hands-off</strong>. I love creating
            thoughtful, inclusive products and have a sharp eye for the little
            details that{" "}
            <strong>separate a good product from an exceptional one.</strong>
          </p>

          <p className="marker:text-muted-foreground pl-0 marker:text-xs">
            I enjoy working across the stack using{" "}
            <strong>Next.js, React,Python and FastAPI</strong>, but what really
            pulls me in is the intersection of coding and intelligent
            automation. I have built a <strong>Python-based AI agent</strong>{" "}
            that automatically routes Production system support tickets to the
            relevant team, increasing SLA adherence. During my internship at
            WeCommit, I scaled a hotel data pipeline to handle{" "}
            <strong>10,000+</strong> records and integrated an LLM to hit{" "}
            <strong>95%</strong> accuracy in automated name extraction,
            eliminating manual data cleaning entirely.
          </p>

          <p className="marker:text-muted-foreground pl-0 marker:text-xs">
            Outside work, I like to build things that actually{" "}
            <strong>solve a real itch</strong>. I created{" "}
            <Link
              href="https://magicmirrorai.vercel.app/"
              target="_blank"
              className="underline underline-offset-4"
            >
              <strong>Magic Mirror</strong>
            </Link>
            {""}, an AI-powered virtual try-on tool helps people{" "}
            <strong>make smarter purchasing decisions</strong> by seeing how
            clothes look on them. I also recently built{" "}
            <Link
              href="https://github.com/mujtabamohamed/snipAI/"
              target="_blank"
              className="underline underline-offset-4"
            >
              <strong>SnipAI</strong>
            </Link>
            {""}, a video clipper for a friend who runs a small podcast, it
            transcribes full episodes, uses an LLM to identify the most
            viral-worthy moments, then automatically crops and captions them
            into ready-to-post <strong>short-form clips</strong>, helping them
            turn a single episode into multiple pieces of content. These
            projects have shaped how I think about building software, not just
            well-crafted, but <strong>genuinely useful</strong>.
          </p>

          <p className="marker:text-muted-foreground pl-0 marker:text-xs">
            In my spare time, you can usually find me{" "}
            <strong>
              lifting weights, playing football and reading about History or
              Geopolitics
            </strong>
            .
          </p>
        </ul>
      </div>
    </section>
  );
}
