"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const logoSrc = mounted
    ? theme === "dark"
      ? "/m-white.png"
      : "/m-black.png"
    : "/m-white.png";

  return (
    <footer className="">
      {/* <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-center gap-3 justify-centert"> */}
      {/* <div className="text-2xl font-semibold">Mujtaba Mohamed</div> */}
      {/* </div>
          <div className="md:col-span-2 flex flex-col items-center justify-items-center text-sm text-muted-foreground space-y-2 text-center md:text-left">
            <p>&copy; 2025 Mujtaba Mohamed. All rights reserved.</p>
            <p>- Inspired by Chánh Đại</p> */}
      {/* <p>
              Inspired by <Link href="https://tailwindcss.com" className="underline underline-offset-4">tailwindcss</Link> & {""}
              <Link href="https://ui.shadcn.com" className="underline underline-offset-4">ui.shadcn.com</Link>.
            </p>
            <p>
              Built for demo purposes. Source on {""}
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="underline underline-offset-4">GitHub</a>.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/llms.txt" className="underline underline-offset-4">llms.txt</Link>
              <span className="rounded border px-2 py-0.5 text-xs">DMCA Protected</span>
              <a href="#top" className="ml-auto rounded border px-2 py-0.5 text-xs">↑ Top</a>
            </div> */}
      {/* </div>
        </div>
      </div> */}
      <div className="border-y">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between border-x px-4 sm:px-4 py-0.5 text-xs text-muted-foreground">
          <Image
            src={logoSrc}
            alt="Logo"
            className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 opacity-75"
            width={100}
            height={100}
          />
          <p>Built and designed by Mujtaba</p>
        </div>
      </div>
    </footer>
  );
}
