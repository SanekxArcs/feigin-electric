import Image from "next/image";

function CaseCard({ title, imageSrc, pdfLink }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        width={500}
        height={300}
        className="w-full"
      />
      <div className="p-4">
        <p className="text-lg font-semibold">{title}</p>
        <a
          href={pdfLink}
          download
          className="mt-2 inline-block text-blue-600 hover:underline"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const caseStudies = [
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
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Case Studies</h1>
            <p className="mt-4 text-lg">
              We've worked for great companies. We offer a full range of
              products for supermarkets, convenience stores, hotels, fast food
              restaurant chains, factories through our ECOD model line, and
              according to individual needs.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
