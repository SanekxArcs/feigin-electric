import Image from "next/image";
import PageTopSection from "../components/PageTopSection";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

interface CaseCardProps {
  title: string;
  imageSrc: string;
  pdfLink: string;
}
const plLang = {
  title: "Wdrożenia",
  description:
    "Pracowaliśmy dla wielkich firm. Oferujemy pełną gamę produktów dla supermarketów, sklepów ogólnospożywczych, hoteli, sieci restauracji szybkiej obsługi, fabryk za pośrednictwem naszej linii modelowej ECOD oraz zgodnie z indywidualnymi potrzebami.",
};
function CaseCard({ title, imageSrc, pdfLink }: CaseCardProps) {
  
  return (
    <div className="relative h-48 md:h-56 bg-white shadow-md rounded-lg overflow-hidden group hover:-translate-y-1 transition-all hover:shadow-xl">
      div
      
      <Image
        src={imageSrc}
        alt={title}
        width={485}
        height={224}
        className="w-full h-48 md:h-56 object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-600 to-transparent p-4 transition-all opacity-100 group-hover:opacity-100 translate-y-0 grid place-content-center md:opacity-0 md:group-hover:opacity-100 md:translate-y-5 md:group-hover:translate-y-0">
        <Link href={pdfLink} download>
          <Button className="text-xs sm:text-sm font-medium text-fred-50 text-balance">
            {title} Download PDF <Download />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Sia Huat",
      imageSrc:
        "https://feiginelectric.com/wp-content/uploads/2024/11/sia-huat.jpg",
      pdfLink:
        "https://feiginelectric.com/wp-content/uploads/2024/11/case-study-sia-huat.pdf",
    },
    {
      title: "Burger King Balkans",
      imageSrc:
        "https://feiginelectric.com/wp-content/uploads/2024/11/balkan-foods-burger-king-tirana-albania.jpg",
      pdfLink:
        "https://feiginelectric.com/wp-content/uploads/2024/11/case-study-balkan-foods-burger-king-tirana-albania.pdf",
    },
    {
      title: "Domino's Pizza Malaysia",
      imageSrc:
        "https://feiginelectric.com/wp-content/uploads/2024/11/case-study-dominos-malaysia.jpg",
      pdfLink:
        "https://feiginelectric.com/wp-content/uploads/2024/11/case-study-dominos-malaysia.pdf",
    },
    {
      title: "Domino's Pizza Singapore",
      imageSrc:
        "https://feiginelectric.com/wp-content/uploads/2024/10/case-study-dominos-singapore.jpg",
      pdfLink:
        "https://feiginelectric.com/wp-content/uploads/2024/10/case-study-dominos-singapore.pdf",
    },
    {
      title: "Lion Thailand",
      imageSrc:
        "https://feiginelectric.com/wp-content/uploads/2024/10/case-study-cover-lion-thailand.jpg",
      pdfLink:
        "https://feiginelectric.com/wp-content/uploads/2024/10/case-study-lion-thailand.pdf",
    },
    {
      title: "Thai Sturgeon Farm",
      imageSrc:
        "https://feiginelectric.com/wp-content/uploads/2024/10/case-study-cover-the-sturgeon-farm.jpg",
      pdfLink:
        "https://feiginelectric.com/wp-content/uploads/2024/10/case-study-thai-sturgeon-farm.pdf",
    },
    {
      title: "The Pizza Company",
      imageSrc:
        "https://feiginelectric.com/wp-content/uploads/2024/10/case-study-cover-the-pizza-company.jpg",
      pdfLink:
        "https://feiginelectric.com/wp-content/uploads/2024/10/case-study-the-pizza-company.pdf",
    },
    {
      title: "Fresh Food",
      imageSrc:
        "https://feiginelectric.com/wp-content/uploads/2024/10/case-study-cover-freshfoods.jpg",
      pdfLink:
        "https://feiginelectric.com/wp-content/uploads/2024/10/case-study-fresh-food.pdf",
    },
    {
      title: "KFC (RD Group Thailand)",
      imageSrc:
        "https://feiginelectric.com/wp-content/uploads/2024/10/case-study-cover-kfc-thailand.jpg",
      pdfLink:
        "https://feiginelectric.com/wp-content/uploads/2024/10/case-study-kfc-rd-group-thailand.pdf",
    },
    {
      title: "SPAR Minimarket Ireland",
      imageSrc:
        "https://feiginelectric.com/wp-content/uploads/2024/10/case-study-cover-spar-ireland.jpg",
      pdfLink:
        "https://feiginelectric.com/wp-content/uploads/2024/10/case-study-spar-minimarket-ireland.pdf",
    },
    {
      title: "BreadTalk",
      imageSrc:
        "https://feiginelectric.com/wp-content/uploads/2024/10/case-study-cover-bread-talk.jpg",
      pdfLink:
        "https://feiginelectric.com/wp-content/uploads/2024/10/case-study-bread-talk.pdf",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageTopSection
        title={plLang.title}
        description={plLang.description}
      />

      {/* Case Studies Section */}
      <section className="py-8">
        <div className="container mx-auto px-2 md:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <CaseCard
                key={index}
                title={study.title}
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
