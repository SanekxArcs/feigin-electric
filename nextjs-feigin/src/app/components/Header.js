"use client";
import Image from "next/image";
import { TransitionLink } from "./utils/TransitionLink";
import NavItem from "./NavItem";
import { Button } from "@/components/ui/button";
import { MonitorCog } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/ecod", label: "ECOD" },
  { href: "/cases", label: "Cases" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {

  return (
    <header className=" z-50 sticky top-0">
      <div className="flex justify-around items-center h-[10dvh] bg-fred-50/30  backdrop-blur-xl shadow-lg mx-1 rounded-b-3xl">
        <div>
          <TransitionLink href="/" onClick={() => handleLinkClick("/")}>
            <Image
              className="hover:drop-shadow-xl transition-all hover scale-[1.02] w-full h-[5dvh]"
              width={100}
              height={100}
              src="https://feiginelectric.com/wp-content/themes/ecnology/images/feigin-electric-logo-light.svg"
              alt="FeiginElectric Logo"
            />
          </TransitionLink>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-2">
            {navItems.map((item) => (
              <NavItem key={item.href} href={item.href} label={item.label} />
            ))}
          </ul>
        </div>
        <Button className="hover:-translate-y-0.5 shadow-md hover:shadow-fgreen-700 transition-all"> <MonitorCog />Online Monitoring</Button>
      </div>
    </header>
  );
}
