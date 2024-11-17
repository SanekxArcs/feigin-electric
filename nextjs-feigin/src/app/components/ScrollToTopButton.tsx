"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`ring-1 ring-primary hover:ring-2 z-50 hover:shadow-primary transition-all fixed bottom-4 right-4 md:bottom-4 md:right-8 p-3 rounded-2xl bg-white shadow-lg ${isVisible ? "flex" : "hidden"} items-center justify-center`}
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}
