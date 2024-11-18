"use client"
import Image from "next/image";
import PageTopSection from "../components/PageTopSection";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "next-sanity";
import { client } from "@/sanity/client";


interface CaseCardProps {
  title: string;
  imagelogo?: string;
  description?: string;
  imageSrc: string;
  pdfLink: string;
}

const plLang = {
  title: "Wdrożenia",
  description:
    "Pracowaliśmy dla wielkich firm. Oferujemy pełną gamę produktów dla supermarketów, sklepów ogólnospożywczych, hoteli, sieci restauracji szybkiej obsługi, fabryk za pośrednictwem naszej linii modelowej ECOD oraz zgodnie z indywidualnymi potrzebami.",
};

function CaseCard({
  title,
  imageSrc,
  pdfLink,
  imagelogo,
  description,
}: CaseCardProps) {
  return (
    <div className="relative border-2 border-fred-600 h-48 md:h-56 bg-white shadow-md rounded-lg overflow-hidden group transition-all hover:shadow-xl">
      <Link href={pdfLink} download>
        <div className="relative flex justify-start items-start gap-1 lg:gap-5 flex-col p-3 lg:p-5 z-10 w-1/2 ">
          <h3 className="font-bold text-fred-700">Wdrożenie</h3>
          <div className="flex justify-center items-center">
            {imagelogo && (
              <Image
                src={imagelogo}
                alt={title}
                width={150}
                height={150}
                className=" h-12 object-contain "
              />
            )}
          </div>
          <p className="text-fred-900 text-xs font-bold text-balance">
            {description || "Reduced consumption energy by 10%"}
          </p>
        </div>
        <div className="absolute bottom-5 left-5">
          <Image
            className="h-4 w-auto"
            width={100}
            height={32}
            src={imagelogo}
            alt="Company Logo"
          />
        </div>

        <div className="absolute top-[5%] -right-[10%]">
          <Image
            src={imageSrc}
            alt={title}
            width={485}
            height={224}
            className="w-full h-44 xs:h-52 md:h-56 lg:h-72 aspect-square object-cover rounded-full border-8 md:border-[14px] border-red-600"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-600/50 to-transparent p-2 transition-all  group-hover:opacity-100 translate-y-0 grid place-content-center opacity-0 md:group-hover:opacity-100 md:translate-y-5 md:group-hover:translate-y-0">
          <Button className="text-xs sm:text-sm font-medium text-fred-50 text-balance">
            {title} Pobierz PDF <Download />
          </Button>
        </div>
      </Link>
    </div>
  );
}

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState<CaseCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`*[_type == "cases"]{
          title,
          "imagelogo": logo.asset->url,
          description,
          "imageSrc": imageMain.asset->url,
          "pdfLink": pdf.asset->url
        }`);
        setCaseStudies(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <PageTopSection title={plLang.title} description={plLang.description} />

      {/* Case Studies Section */}
      <section className="py-8">
        <div className="container mx-auto px-2 md:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <CaseCard
                key={index}
                title={study.title}
                description={study.description}
                imagelogo={study.imagelogo}
                imageSrc={study.imageSrc}
                pdfLink={study.pdfLink}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
