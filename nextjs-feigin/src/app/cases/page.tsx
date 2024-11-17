import Image from "next/image";
import PageTopSection from "../components/PageTopSection";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import { StaticImageData } from "next/image";
import FeiginElectricLogo from "../assets/FeiginElectricLogo.svg";

import SiaHuatLogo from "../assets/cases/logos/siahuat-logo.png";
import BurgerKingLogo from "../assets/cases/logos/Burger_King_2020.svg";
import DominosLogo from "../assets/cases/logos/Dominos-logo-500x281.png";
import LionLogo from "../assets/cases/logos/LION_logo.svg";
import FishLogo from "../assets/cases/logos/Thai_Farm.webp";
import PizzaLogo from "../assets/cases/logos/The_Pizza_Company_Logo_(2023).svg";
import FreshFoodLogo from "../assets/cases/logos/freshFood.jpg";
import KFCLogo from "../assets/cases/logos/KFC_logo.svg";
import SparLogo from "../assets/cases/logos/Spar-logo.svg";
import BreadTalkLogo from "../assets/cases/logos/BreadTalk_logo.svg";

import SiaHuatImage from "../assets/cases/sia-huat.jpg";
import BurgerKingImage from "../assets/cases/burgerKing.jpg";
import DominosMalasyaImage from "../assets/cases/dominosMalasia.jpg";
import DominosSyngaporImage from "../assets/cases/dominosSingapore.webp";
import LionImage from "../assets/cases/lion.jpg";
import FishImage from "../assets/cases/fissh.jpg";
import PizzaImage from "../assets/cases/pizzaCompany.jpg";
import FreshFoodImage from "../assets/cases/freshFood.jpg";
import KFCImage from "../assets/cases/kfc.jpg";
import SparImage from "../assets/cases/spar.jpg";
import BreadTalkImage from "../assets/cases/breadTalk.jpg";

interface CaseCardProps {
  title: string;
  imagelogo?: string;
  description?: string;
  imageSrc: string | StaticImageData;
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
            <Image
              src={imagelogo || FeiginElectricLogo}
              alt={title}
              width={150}
              height={150}
              className=" h-12 object-contain "
            />
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
            src={FeiginElectricLogo}
            alt="Feigin Electric Logo"
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
        <div className="absolute -top-[50%] left-1/2">
          <div className="w-full h-48 aspect-square rounded-full border-[16px] border-red-600/10"></div>
        </div>
        <div className="absolute -top-5  -left-5">
          <div className=" h-10 w-10  aspect-square rounded-full border-[8px] border-red-600"></div>
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
  const caseStudies = [
    {
      title: "Sia Huat",
      imagelogo: SiaHuatLogo,
      description: "Redused consumption energy by 10%",
      imageSrc: SiaHuatImage,
      pdfLink: "/cases/pdf/case-study-sia-huat.pdf",
    },
    {
      title: "Burger King",
      imagelogo: BurgerKingLogo,
      description: "Redused consumption energy by 8.41%",
      imageSrc: BurgerKingImage,
      pdfLink:
        "/cases/pdf/case-study-balkan-foods-burger-king-tirana-albania.pdf",
    },
    {
      title: "Dominos Malasya",
      imagelogo: DominosLogo,
      description: "  Redused consumption energy by 10%",
      imageSrc: DominosMalasyaImage,
      pdfLink: "/cases/pdf/case-study-dominos-malaysia.pdf",
    },
    {
      title: "Dominos Syngapor",
      imagelogo: DominosLogo,
      description: "Redused consumption energy by 10%",
      imageSrc: DominosSyngaporImage,
      pdfLink: "/cases/pdf/case-study-dominos-singapore.pdf",
    },
    {
      title: "Lion",
      imagelogo: LionLogo,
      description: "Redused consumption energy by 8.79%",
      imageSrc: LionImage,
      pdfLink: "/cases/pdf/case-study-lion-thailand.pdf",
    },
    {
      title: "Thai Sturgeon Farm",
      imagelogo: FishLogo,
      description: " Redused consumption energy by 10%",
      imageSrc: FishImage,
      pdfLink: "/cases/pdf/case-study-thai-sturgeon-farm.pdf",
    },
    {
      title: "Pizza Company",
      imagelogo: PizzaLogo,
      description: "  Redused consumption energy by 10%",
      imageSrc: PizzaImage,
      pdfLink: "/cases/pdf/case-study-the-pizza-company.pdf",
    },
    {
      title: "FreshFood",
      imagelogo: FreshFoodLogo,
      description: "Redused consumption energy by 20,5%",
      imageSrc: FreshFoodImage,
      pdfLink: "/cases/pdf/case-study-fresh-food.pdf",
    },
    {
      title: "KFC",
      imagelogo: KFCLogo,
      description: "Redused consumption energy by 8.79%",
      imageSrc: KFCImage,
      pdfLink: "/cases/pdf/case-study-kfc-rd-group-thailand.pdf",
    },
    {
      title: "Spar",
      imagelogo: SparLogo,
      description: "Redused consumption energy by 5.12%",
      imageSrc: SparImage,
      pdfLink: "/cases/pdf/case-study-spar-minimarket-ireland.pdf",
    },
    {
      title: "BreadTalk",
      imagelogo: BreadTalkLogo,
      description: "Redused consumption energy by 12.64%",
      imageSrc: BreadTalkImage,
      pdfLink: "/cases/pdf/case-study-bread-talk.pdf",
    },
  ];

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
