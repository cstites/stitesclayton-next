"use client";

import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full p-4 font-mono border-b-2 fixed bg-inherit z-50">
      <div className="flex items-center justify-between">
        <Image src="/tree.png" alt="StitesClayton.Co" width={36} height={36} />
        <p className="pl-4">StitesClayton.Co</p>
      </div>
      <ModeToggle />
    </div>
  );
}
