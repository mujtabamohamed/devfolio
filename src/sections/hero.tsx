"use client";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Globe,
  GraduationCap,
  Mars,
  Code,
  BadgeCheckIcon,
} from "lucide-react";
import { TextLoop } from "@/components/ui/text-loop";
import Link from "next/link";
import { AppleHelloEnglishEffect } from "@/components/apple-hello-effect";

export function Hero() {
  return (
    <section className="space-y-0">
      <div className="w-full">
        <div className="min-h-60 md:min-h-72 w-full relative">
          {/* Dark Dot Matrix */}

          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundColor: "var(--background)",
              backgroundImage: `
                radial-gradient(circle at 25% 25%, var(--hero-dot-1) 0.5px, transparent 1px),
                radial-gradient(circle at 75% 75%, var(--hero-dot-2) 0.5px, transparent 1px)
              `,
              backgroundSize: "10px 10px",
              imageRendering: "pixelated",
            }}
          />

          <div className="relative flex items-center justify-center min-h-60 md:min-h-72">
            <AppleHelloEnglishEffect />
          </div>
        </div>
      </div>

      <div className="flex items-start border-y">
        <div className="relative border-r flex justify-center">
          <Image
            src="/Mujtaba-2.jpg"
            alt="Avatar"
            width={170}
            height={170}
            className="rounded-full w-32 h-32 sm:w-40 sm:h-40 border p-0.5"
          />
        </div>
        <div className="flex-1 mt-auto mb-2 space-y-2">
          <div className="flex items-center border-y">
            <h1 className="text-xl sm:text-2xl md:text-3xl ml-3 sm:ml-5 md:ml-6 font-semibold">
              Mujtaba Mohamed
            </h1>
            <BadgeCheckIcon className="h-5 w-5 sm:h-6 sm:w-6 ml-1 md:ml-2 fill-[#009cf6] text-background" />
            {/* <Volume2 className="h-5 w-5 ml-1 text-muted-foreground" /> */}
          </div>
          <TextLoop className="text-sm md:text-md xl:text-[15px] text-muted-foreground ml-3 sm:ml-5 md:ml-6">
            <span>Software Developer</span>
            <span>Problem Solving</span>
            <span>AI Automation</span>
          </TextLoop>
        </div>
      </div>

      <ul className="grid gap-2 text-sm md:text-md px-4 sm:px-6 mt-6 sm:mt-8 py-4 sm:py-6 text-foreground border-y">
        <li className="flex items-center gap-4 ">
          <div className="bg-card rounded-md border p-1 custom-shadow">
            <Code className="h-4 w-4 text-muted-foreground" />
          </div>
          Software Developer <strong>@Accenture</strong>
        </li>

        <li className="flex items-center gap-4">
          <div className="bg-card rounded-md border p-1 custom-shadow">
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </div>
          KJ Somaiya Institute of Technology
        </li>

        <li className="flex items-center gap-4">
          <div className="bg-card rounded-md border p-1 custom-shadow">
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </div>
          Mumbai, India
        </li>

        <li className="flex items-center gap-4">
          <div className="bg-card rounded-md border p-1 custom-shadow">
            <Mail className="h-4 w-4 text-muted-foreground" />
          </div>
          <Link target="_blank" href="mailto:mujtabamohamed@gmail.com">
            mujtabamohamed@gmail.com
          </Link>
        </li>

        <li className="flex items-center gap-4">
          <div className="bg-card rounded-md border p-1 custom-shadow">
            <Globe className="h-4 w-4 text-muted-foreground" />
          </div>
          <Link target="_blank" href="https://mujtabamohamed.vercel.app">
            mujtabamohamed.vercel.app
          </Link>
        </li>

        <li className="flex items-center gap-4">
          <div className="bg-card rounded-md border p-1 custom-shadow">
            <Mars className="h-4 w-4 text-muted-foreground" />
          </div>
          he/him
        </li>
      </ul>
    </section>
  );
}
