"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const plLang = {
  title: "Dziękujemy!",
  paragraph:
    "Dziękujemy za skontaktowanie się z nami. Wkrótce odpowiemy na Twoją wiadomość.",
  button: "Wróć na stronę główną",
  countdown: "Zostaniesz przekierowany za",
};

const ThankYouPage = () => {
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
    <div className="grid place-content-center text-center p-6 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{plLang.title}</h1>
      <p className="text-lg sm:text-xl mb-8">{plLang.paragraph}</p>
      <p className="text-lg sm:text-xl mb-8">
        {plLang.countdown} {countdown} {countdown === 1 ? "sekundę" : "sekundy"}
        .
      </p>
      <Link href="/">
        <Button className="bg-fred-400 py-4 px-8 ring-fred-400 text-fred-50 font-semibold transition-all duration-300 hover:bg-red-500 ring-1 ring-offset-2 hover:ring-fred-600 hover:ring-2">
          {plLang.button} <ChevronRight />
        </Button>
      </Link>
    </div>
  );
};

export default ThankYouPage;
