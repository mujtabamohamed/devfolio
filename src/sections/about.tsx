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
          <li className="marker:text-muted-foreground pl-2 marker:text-xs">
            <strong>Full Stack Developer</strong> passionate about creating
            impactful, AI-driven software solutions with intuitive and scalable
            designs.
          </li>

          <li className="marker:text-muted-foreground pl-2 marker:text-xs">
            Skilled in <strong>Next.js</strong>, <strong>React</strong>,{" "}
            <strong>Node.js</strong>, <strong>FastAPI</strong>, and modern
            full-stack technologies; building high-quality web applications, AI
            automations, and data-driven systems.
          </li>

          <li className="marker:text-muted-foreground pl-2 marker:text-xs">
            Passionate about exploring new technologies and turning ideas into
            reality through polished, thoughtfully crafted personal projects.
          </li>

          <li className="marker:text-muted-foreground pl-2 marker:text-xs">
            Creator of{" "}
            <Link
              href="https://magicmirrorai.vercel.app/"
              target="_blank"
              className="underline underline-offset-4"
            >
              <strong>Magic Mirror</strong>
            </Link>{" "}
            (2025): <strong>AI-powered virtual try-on</strong> for realistic
            clothing visualization
            <ul className="mt-1 ml-4 space-y-1 list-disc list-outside">
              <li className="marker:text-muted-foreground pl-2 marker:text-xs">
                <strong>100+</strong> Active Users
              </li>
              <li className="marker:text-muted-foreground pl-2 marker:text-xs">
                <strong>Try before you buy</strong>, make smarter purchasing
                decisions by seeing clothes on yourself
              </li>
            </ul>
          </li>

          <li className="marker:text-muted-foreground pl-2 marker:text-xs">
            Creator of{" "}
            <Link
              href="https://github.com/mujtabamohamed/Chat-PDF"
              target="_blank"
              className="underline underline-offset-4"
            >
              <strong>Chat PDF</strong>
            </Link>{" "}
            (2024): AI-powered platform that transforms PDFs into{" "}
            <strong>interactive conversations</strong>
            <ul className="mt-1 ml-4 space-y-1 list-disc list-outside">
              <li className="marker:text-muted-foreground pl-2 marker:text-xs">
                Upload PDFs and ask questions to get instant{" "}
                <strong>AI-powered answers fromm your PDF</strong>
              </li>
              <li className="marker:text-muted-foreground pl-2 marker:text-xs">
                Seamless document processing and chat history
              </li>
            </ul>
          </li>

          {/* =================================================================================== */}

          {/* <p>
            Hello, World! I am Mujtaba Mohamed — a Full Stack Developer
            passionate about creating impactful, AI-driven software solutions
            with intuitive and scalable designs.
          </p>
          <p>
            With experience building applications across web, backend, and AI, I
            specialize in Next.js, React, Node.js, FastAPI, and modern
            full-stack technologies. I enjoy combining data, design, and
            automation to solve real-world problems and deliver engaging user
            experiences.
          </p>
          <p>
            Some of my key projects include{" "}
            <Link
              target="_blank"
              href="https://magicmirrorai.vercel.app/"
              className="underline underline-offset-4"
            >
              Magic Mirror
            </Link>
            , an AI-powered virtual try-on experience for realistic clothing
            visualization,{" "}
            <Link
              target="_blank"
              href="https://github.com/mujtabamohamed/Chat-PDF"
              className="underline underline-offset-4"
            >
              Chat PDF
            </Link>
            , an AI-powered platform that transforms PDFs into interactive
            conversations, and Crop Yield Prediction, a data-driven system
            leveraging 100+ satellite image sets and weather data to achieve 87%
            prediction accuracy. I have also built practical solutions like an
            AI-powered hotel data automation system and a face recognition
            attendance tool with 90% accuracy.
          </p>

          <p>
            I am eager to collaborate with like-minded individuals and explore
            new opportunities in the tech industry. Feel free to reach out for
            any collaborations or just to say hi.
          </p> */}
        </ul>
      </div>
    </section>
  );
}
