// components/Header.jsx

"use client";
import { useState } from "react";
import Image from "next/image";
import { TransitionLink } from "./utils/TransitionLink";
import NavItem from "./NavItem";
import { Button } from "@/components/ui/button";
import { MonitorCog, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import FeiginElectricLogo from "../assets/FeiginElectricLogo.svg";

const navItems = [
  {
    href: "/",
    label: {
      en: "Home",
      pl: "Strona Główna",
    },
  },
  {
    href: "/about",
    label: {
      en: "About Us",
      pl: "O Nas",
    },
  },
  {
    href: "/ecod",
    label: {
      en: "ECOD",
      pl: "ECOD",
    },
  },
  {
    href: "/acrel",
    label: {
      en: "Acrel",
      pl: "Acrel",
    },
  },
  {
    href: "/cases",
    label: {
      en: "Cases",
      pl: "Przypadki",
    },
  },
  {
    href: "/blog",
    label: {
      en: "Blog",
      pl: "Blog",
    },
  },
  {
    href: "/contact",
    label: {
      en: "Contact",
      pl: "Kontakt",
    },
  },
];

const plLang = {
  ctaButton: "Monitorowanie Online",
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="z-50 sticky top-0 bg-fred-50/30 backdrop-blur-xl shadow-lg mx-1 rounded-b-3xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <TransitionLink href="/">
              <Image
                className="hover:drop-shadow-xl transition-all hover:scale-105 h-8 w-auto"
                width={100}
                height={32}
                src={FeiginElectricLogo}
                alt="Feigin Electric Logo"
              />
            </TransitionLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <ul className="flex items-center">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  label={item.label.pl}
                />
              ))}
            </ul>
            <Link href="https://ems.feiginelectric.com/">
              <Button className="bg-fgreen-600 px-6 py-3 text-white font-semibold transition-all duration-300 hover:text-fgreen-50 rounded-full hover:bg-fgreen-700 hover:ring-1 ring-offset-2 ring-fgreen-700">
                <MonitorCog className="mr-2" />
                {plLang.ctaButton}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button and 'Online Monitoring' Button */}
          <div className="flex items-center lg:hidden">
            {/* 'Online Monitoring' Button visible on md screens and above */}
            <div className="hidden md:block">
              <Link href="https://ems.feiginelectric.com/">
                <Button className="bg-fgreen-600 px-6 py-3 text-white font-semibold transition-all duration-300 hover:text-fgreen-50 rounded-full hover:bg-fgreen-700 hover:ring-1 ring-offset-2 ring-fgreen-700">
                  <MonitorCog className="mr-2" />
                  {plLang.ctaButton}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              ))}
              {/* 'Online Monitoring' Button visible on small screens within the mobile menu */}
              <div className="mt-2">
                <Link href="https://ems.feiginelectric.com/">
                  <Button className="bg-fgreen-600 px-6 py-3 text-white font-semibold transition-all duration-300 hover:text-fgreen-50 rounded-full hover:bg-fgreen-700 hover:ring-1 ring-offset-2 ring-fgreen-700">
                    <MonitorCog className="mr-2" />
                    {plLang.ctaButton}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
