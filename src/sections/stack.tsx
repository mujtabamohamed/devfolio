"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

const ExpressIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="m13.78 16.92 3.35-4.54.42.55 2.87 4a1.26 1.26 0 0 0 1.58.6l-4-5.33a.56.56 0 0 1 0-.82l2.1-2.74 1.55-2a1.18 1.18 0 0 0-1.49.55l-3 4-3-4a1.31 1.31 0 0 0-1.58-.55l4 5.2-4.29 5.77a1.23 1.23 0 0 0 1.49-.69M9.93 7.19a4.81 4.81 0 0 0-7.57 2.73L2 11.65v1a5 5 0 0 1 .11.57 5.42 5.42 0 0 0 1.37 3.2 5.24 5.24 0 0 0 6.09.78 4.49 4.49 0 0 0 2.15-3.3c-.52-.16-.81-.07-1 .49a3.36 3.36 0 0 1-2.15 2.39c-3.25 1.09-5.8-1.05-5.66-4.59h8.9c.1-2-.3-3.76-1.88-5m-7 4.22C3 8.77 4.76 7 7.16 7c2.18 0 3.77 1.84 3.83 4.4z" />
  </svg>
);

const ShadCNIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="m19.01 11.55-7.46 7.46c-.46.46-.46 1.19 0 1.65a1.16 1.16 0 0 0 1.64 0l7.46-7.46c.46-.46.46-1.19 0-1.65s-1.19-.46-1.65 0ZM19.17 3.34c-.46-.46-1.19-.46-1.65 0L3.34 17.52c-.46.46-.46 1.19 0 1.65a1.16 1.16 0 0 0 1.64 0L19.16 4.99c.46-.46.46-1.19 0-1.65Z" />
  </svg>
);

export function Stack() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Use a fallback theme during hydration
  const currentTheme = mounted ? theme : "dark";

  const items = [
    { name: "Python", icon: "/tech-icons/Python.svg", shortName: "Python" },
    { name: "TypeScript", icon: "/tech-icons/Typescript.svg", shortName: "TS" },
    { name: "JavaScript", icon: "/tech-icons/Javascript.svg", shortName: "JS" },
    { name: "React", icon: "/tech-icons/React.svg", shortName: "React" },
    {
      name: "Next.js",
      icon:
        currentTheme === "dark"
          ? "/tech-icons/Nextjs-White.svg"
          : "/tech-icons/Nextjs-Black.svg",
      shortName: "Next.js",
    },
    { name: "C++", icon: "/tech-icons/C++.svg", shortName: "C++" },
    { name: "Node.js", icon: "/tech-icons/Node.js.svg", shortName: "Node" },
    { name: "Express", icon: ExpressIcon, shortName: "Express" },
    { name: "FastAPI", icon: "/tech-icons/FastAPI.svg", shortName: "FastAPI" },
    { name: "MongoDB", icon: "/tech-icons/MongoDB.svg", shortName: "MongoDB" },
    {
      name: "PostgreSQL",
      icon: "/tech-icons/PostgresSQL.svg",
      shortName: "PostgreSQL",
    },
    { name: "MySQL", icon: "/tech-icons/MySQL.svg", shortName: "MySQL" },
    {
      name: "Firebase",
      icon: "/tech-icons/Firebase.svg",
      shortName: "Firebase",
    },
    {
      name: "Supabase",
      icon: "/tech-icons/Supabase.svg",
      shortName: "Supabase",
    },
    { name: "HTML", icon: "/tech-icons/HTML.svg", shortName: "HTML" },
    { name: "CSS", icon: "/tech-icons/CSS.svg", shortName: "CSS" },
    {
      name: "Tailwind",
      icon: "/tech-icons/Tailwind.svg",
      shortName: "Tailwind",
    },
    { name: "Shadcn", icon: ShadCNIcon, shortName: "ShadCN" },
    // { name: "JQuery", icon: "/tech-icons/Jquery.svg", shortName: "jQuery" },

    { name: "Git", icon: "/tech-icons/Git.svg", shortName: "Git" },
    { name: "Docker", icon: "/tech-icons/Docker.svg", shortName: "Docker" },
    {
      name: "Kubernetes",
      icon: "/tech-icons/Kubernetes.svg",
      shortName: "Kubernetes",
    },
    {
      name: "AWS",
      icon:
        currentTheme === "dark"
          ? "/tech-icons/AWS-White.svg"
          : "/tech-icons/AWS-Black.svg",
      shortName: "AWS",
    },
    {
      name: "Google Cloud",
      icon: "tech-icons/Google Cloud.svg",
      shortName: "GCP",
    },
    {
      name: "Ollama",
      icon:
        currentTheme === "dark"
          ? "/tech-icons/Ollama-White.svg"
          : "/tech-icons/Ollama-Black.svg",
      shortName: "Ollama",
    },
    {
      name: "OpenAI",
      icon:
        currentTheme === "dark"
          ? "/tech-icons/OpenAI-White.svg"
          : "/tech-icons/OpenAI-Black.svg",
      shortName: "OpenAI",
    },
    {
      name: "Claude Code",
      icon: "/tech-icons/Claude-Code.svg",
      shortName: "Claude Code",
    },
    {
      name: "Hugging Face",
      icon: "/tech-icons/HuggingFace.svg",
      shortName: "Hugging Face",
    },
    // { name: "NPM", icon: "/tech-icons/Npm.svg", shortName: "NPM" },
    // { name: "Figma", icon: "/tech-icons/Figma.svg", shortName: "Figma" },
    // { name: "Photoshop", icon: "/tech-icons/Photoshop.svg", shortName: "PS" },
  ];

  return (
    <section className="space-y-0" id="stack">
      <Separator />
      <h2 className="text-2xl md:text-3xl font-semibold px-4 md:px-6">Stack</h2>
      <Separator />

      <div className="flex flex-wrap gap-2 sm:gap-3 px-4 sm:px-6 py-4 sm:py-6">
        <TooltipProvider delayDuration={300}>
          {items.map((tech) => (
            <Tooltip key={tech.name}>
              <TooltipTrigger asChild>
                <div className="flex items-center cursor-pointer">
                  {typeof tech.icon === "function" ? (
                    <tech.icon className="text-foreground" />
                  ) : (
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="object-contain w-8 h-8 sm:w-10 sm:h-10"
                      onError={(e) => {
                        console.error(
                          `Failed to load icon for ${tech.name}: ${tech.icon}`,
                        );
                      }}
                    />
                  )}
                </div>
              </TooltipTrigger>

              <TooltipContent className="px-3 py-2 text-sm">
                {tech.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
      <Separator />
    </section>
  );
}
