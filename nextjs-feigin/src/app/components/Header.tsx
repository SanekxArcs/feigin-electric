"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { TransitionLink } from "./utils/TransitionLink";
import NavItem from "./NavItem";
import { Button } from "@/components/ui/button";
import { MonitorCog, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FeiginElectricLogo from "../assets/FeiginElectricLogo2.svg";
import plFlag from "../assets/flag/pl.svg";
import enFlag from "../assets/flag/en.svg";
import { useToast } from "@/hooks/use-toast";

const navItems = [
  { href: "/", label: { en: "Home", pl: "Główna" } },
  { href: "/about", label: { en: "About Us", pl: "O Nas" } },
  { href: "/products", label: { en: "Products", pl: "Produkty" } },
  { href: "/recognitions", label: { en: "Recognitions", pl: "Uznania" } },
  { href: "/case-studies", label: { en: "Cases", pl: "Wdrożenia" } },
  { href: "/blog", label: { en: "Blog", pl: "Blog" } },
  { href: "/contact", label: { en: "Contact", pl: "Kontakt" } },
];

const plLang = {
  ctaButton: "Feigin EMS",
  toast: "Już jesteś na polskiej wersji strony."
};

export default function Header() {
  const pathname = usePathname() ;
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

    const baseUrl = "https://feiginelectric.com";
    const fullUrl = `${baseUrl}${pathname === "/" ? "" : pathname}`;

  const handlePolishClick = () => {
    toast({
      description: plLang.toast,
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="z-50 sticky top-0 bg-fred-50/30 backdrop-blur-xl shadow-lg mx-1 rounded-b-3xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TransitionLink href="/">
              <Image
                className="hover:drop-shadow-xl transition-transform hover:scale-105 h-8 w-auto"
                width={100}
                height={32}
                src={FeiginElectricLogo}
                alt="Feigin Electric Logo"
              />
            </TransitionLink>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-6">
            <ul className="flex items-center space-x-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <NavItem
                    key={item.href}
                    href={item.href}
                    label={item.label.pl}
                  />
                </motion.li>
              ))}
            </ul>
            <TransitionLink href="https://ems.feiginelectric.com/">
            <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
          
              <Button
                variant="outline"
                className=" text-fgreen-950 font-semibold transition-all duration-300 hover:text-fgreen-50 rounded-full hover:bg-fgreen-700 ring-1 ring-fgreen-700 ring-offset-2"
              >
                <MonitorCog className="mr-2 md:mr-0" />
                <span className="md:hidden xl:block">{plLang.ctaButton}</span>
              </Button></motion.div>
            </TransitionLink>
            {/* Language Switcher */}
            <div className="relative flex items-center space-x-4 ">
              <motion.div className="relative group "initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <Image src={plFlag} alt="Polish" width={24} height={24} />
                </Button>
                <div className="absolute overflow-hidden right-0 mt-2 w-24 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <TransitionLink
                    href={
                      pathname.startsWith("/blog")
                        ? "https://feiginelectric.com/blog"
                        : pathname.startsWith("/recognitions")
                          ? "https://feiginelectric.com/recognitions"
                          : fullUrl
                    }
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-fred-200"
                  >
                    <Image src={enFlag} alt="English" width={24} height={24} />
                    <span>EN</span>
                  </TransitionLink>
                  <div
                    className="flex items-center space-x-2 px-4 py-2 bg-fred-100 hover:bg-fred-200 cursor-pointer"
                    onClick={handlePolishClick}
                  >
                    <Image src={plFlag} alt="Polish" width={24} height={24} />
                    <span>PL</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </nav>

          {/* Mobile Menu Button and 'Online Monitoring' Button */}
          <div className="flex items-center lg:hidden">
            {/* 'Online Monitoring' Button visible on md screens and above */}
            <div className="hidden md:block">
              <TransitionLink href="https://ems.feiginelectric.com/">
                <Button
                  variant="outline"
                  className=" text-fgreen-950 font-semibold transition-all duration-300 hover:text-fgreen-50 rounded-full hover:bg-fgreen-700 ring-1 ring-fgreen-700 ring-offset-2"
                >
                  <MonitorCog className="mr-2" />
                  <span className="">{plLang.ctaButton}</span>
                </Button>
              </TransitionLink>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="ml-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden overflow-hidden"
          >
            <nav className="px-4 pt-4 pb-6 space-y-2 flex flex-col justify-center">
              {navItems.map((item) => (
                <div
                  className="mx-auto"
                  key={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <NavItem
                    href={item.href}
                    label={item.label.pl}
                    className="block px-4 py-2 rounded-md text-lg font-medium text-gray-800 hover:bg-gray-200"
                  />
                </div>
              ))}
              {/* 'Online Monitoring' Button visible on small screens within the mobile menu */}
              <div className="mt-4 md:hidden flex justify-center">
                <TransitionLink href="https://ems.feiginelectric.com/">
                  <Button
                    variant="outline"
                    className=" text-fgreen-950 font-semibold transition-all duration-300 hover:text-fgreen-50 rounded-full hover:bg-fgreen-700 ring-1 ring-fgreen-700 ring-offset-2"
                  >
                    <MonitorCog className="mr-2" />
                    <span className="">{plLang.ctaButton}</span>
                  </Button>
                </TransitionLink>
              </div>
              {/* Language Switcher */}
              <div className=" flex justify-center w-full pt-4 ">
                <div
                  className="flex items-center rounded-md space-x-2 px-4 py-2 bg-fred-200"
                  onClick={handlePolishClick}
                >
                  <Image src={plFlag} alt="Polish" width={24} height={24} />
                  <span>PL</span>
                </div>
                <TransitionLink
                  href={
                    pathname.startsWith("/blog")
                      ? "https://feiginelectric.com/blog"
                      : pathname.startsWith("/recognitions")
                        ? "https://feiginelectric.com/recognitions"
                        : fullUrl
                  }
                  className="flex items-center space-x-2 px-4 rounded-md py-2 hover:bg-gray-100"
                >
                  <Image src={enFlag} alt="English" width={24} height={24} />
                  <span>EN</span>
                </TransitionLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
