"use client"
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`ring-1 ring-primary hover:ring-2 hover:shadow-primary transition-all  fixed bottom-2 right-3 p-2 rounded-full bg-white shadow-lg ${isVisible ? "block" : "hidden"}`}
      type="button"
      onClick={scrollToTop}
    >
        <ArrowUp/>
    </button>
  );
}
