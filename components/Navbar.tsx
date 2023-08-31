import React from "react";
import Logo from "./Logo";
import { UserButton } from "@clerk/nextjs";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between p-4 px-8 h-[60px]">
      <Logo />
      <div className="flex items-center space-x-2">
        <UserButton />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;
