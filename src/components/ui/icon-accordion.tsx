"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Cpu,
  Globe,
  ChevronRight,
  Braces,
  ChevronsUpDown,
  ChevronsDownUp,
  GraduationCap,
  University,
  LibraryBig,
  Atom,
  Brain,
  Cloud,
  TabletSmartphone,
  Database,
} from "lucide-react";

export type AccordionItem = {
  id: string;
  icon?: string;
  iconColour?: string;
  iconTextColour?: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

const iconMap: Record<
  string,
  React.ComponentType<React.ComponentProps<"svg">>
> = {
  Cpu,
  Globe,
  Code,
  ChevronRight,
  Braces,
  GraduationCap,
  University,
  LibraryBig,
  Atom,
  Brain,
  Cloud,
  TabletSmartphone,
  Database,
};

export function AccordionComponent({ items }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <div className="w-full">
      <div className="">
        {items.map((item) => {
          const IconComponent = item.icon ? iconMap[item.icon] : null;

          return (
            <div key={item.id} className="border-t border-border/50">
              <div className="overflow-hidden relative flex border-b border-border/50 items-center hover:bg-card/15 pl-5 pr-0">
                {IconComponent && (
                  <div className="flex items-center justify-center mr-5">
                    <IconComponent
                      className="w-7 h-7 sm:w-8 sm:h-8 bg-card border p-1.5 rounded-md sm:rounded-lg custom-shadow"
                      style={{
                        backgroundColor: item.iconColour || "hsl(var(--card))",
                        color:
                          item.iconTextColour || "hsl(var(--muted-foreground))",
                      }}
                    />
                  </div>
                )}

                <div
                  className="flex w-full items-center p-3 sm:p-4 cursor-pointer border-l"
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="font-medium text-md sm:text-lg text-foreground">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-xs sm:text-sm text-muted-foreground font-sans">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <motion.div
                    transition={{ duration: 0.2 }}
                    className="w-8 h-8 flex ml-auto items-center justify-center"
                  >
                    {openItems.includes(item.id) ? (
                      <ChevronsDownUp className="w-4 h-4 text-muted-foreground " />
                    ) : (
                      <ChevronsUpDown className="w-4 h-4 text-muted-foreground" />
                    )}
                  </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden ml-auto"
                  >
                    <div className="px-8 md:px-14 py-4 md:py-6 space-y-3">{item.content}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
