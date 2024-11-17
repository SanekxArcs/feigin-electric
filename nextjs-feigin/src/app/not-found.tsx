"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, CircleArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TransitionLink } from "./components/utils/TransitionLink";

const plLang = {
  title: "Nie znaleziono",
  paragraph: "Strona jeszcze w budowie lub nie istnieje.",
  button: "Wróć do strony głównej",
  countdown: "Zostaniesz przekierowany za",
};

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className="relative bg-fred-50 grid place-content-center h-[80svh] px-4">
      <div className="text-center max-w-md">
        <AlertTriangle className="w-16 h-16 text-fred-600 mb-4 mx-auto" />
        <h2 className="text-fred-700 text-4xl font-bold mb-2">
          {plLang.title}
        </h2>
        <p className="text-gray-700 text-lg mb-6">{plLang.paragraph}</p>
        
        <TransitionLink href="/">
          <Button
            variant="outline"
            className="text-fgreen-950 font-semibold transition-all duration-300 hover:text-fgreen-50 rounded-full hover:bg-fgreen-700 ring-1 ring-fgreen-700 ring-offset-2"
          >
            <CircleArrowLeft className="mr-2 md:mr-0" />
            <span className="md:hidden xl:block">{plLang.button}</span>
          </Button>
        </TransitionLink>
        <p className="text-sm sm:text-xl mt-8 text-gray-500">
          {plLang.countdown} {countdown}{" "}
          {countdown === 1 ? "sekundę" : "sekundy"}.
        </p>
      </div>
      <div className="absolute top-0 inset-x-0 h-24 pointer-events-none bg-gradient-to-b from-white z-20"></div>
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none bg-gradient-to-t from-white z-20"></div>
    </div>
  );
}
