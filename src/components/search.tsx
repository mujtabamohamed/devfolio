"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Award,
  Briefcase,
  Code,
  File,
  GraduationCap,
  Layers,
  Package,
  Rss,
  SearchIcon,
  TextInitial,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export function SearchComponent() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <>
      <button
        className="border-input bg-transparent text-foreground custom-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-9 w-fit rounded-full border px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
        onClick={() => setOpen(true)}
      >
        <span className="flex grow items-center">
          <SearchIcon
            className="text-muted-foreground/80 -ms-1 me-3"
            size={16}
            aria-hidden="true"
          />
          <span className="text-muted-foreground/70 font-normal hidden xs:inline"></span>
        </span>
        <kbd className="bg-transparent text-muted-foreground/70 ms-0 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.8rem] font-medium">
          ⌘K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Menu">
            <CommandItem onSelect={() => router.push("/")}>
              <Code size={16} className="opacity-60" aria-hidden="true" />
              <span>Devfolio</span>
            </CommandItem>

            <CommandItem onSelect={() => router.push("/blogs")}>
              <Rss size={16} className="opacity-60" aria-hidden="true" />
              <span>Blogs</span>
            </CommandItem>

            <CommandItem
              onSelect={() =>
                router.push(
                  "https://drive.google.com/file/d/1Rw_8r7k9nYSKmkRmOlO5Tf27C_6MgVQ3/view?usp=drive_link"
                )
              }
            >
              <File size={16} className="opacity-60" aria-hidden="true" />
              <span>Resume</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Devfolio">
            <CommandItem onSelect={() => scrollToSection("about")}>
              <TextInitial
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>About</span>
            </CommandItem>

            <CommandItem onSelect={() => scrollToSection("stack")}>
              <Layers size={16} className="opacity-60" aria-hidden="true" />
              <span>Tech Stack</span>
            </CommandItem>

            <CommandItem onSelect={() => scrollToSection("experience")}>
              <Briefcase size={16} className="opacity-60" aria-hidden="true" />
              <span>Experience</span>
            </CommandItem>

            <CommandItem onSelect={() => scrollToSection("projects")}>
              <Package size={16} className="opacity-60" aria-hidden="true" />
              <span>Projects</span>
            </CommandItem>

            <CommandItem onSelect={() => scrollToSection("education")}>
              <GraduationCap
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Education</span>
            </CommandItem>

            <CommandItem onSelect={() => scrollToSection("certifications")}>
              <Award size={16} className="opacity-60" aria-hidden="true" />
              <span>Certifications</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
export default SearchComponent;
