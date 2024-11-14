
import PageTopSection from "../components/PageTopSection";
import ProductsSection from "../homecomponents/ProductsSection";
import OurPartners from "../homecomponents/OurClients";
import CallToActionSection from "../homecomponents/CallToActionSection";

const plLang = {
  title: "Nasze Produkty",
  description: "Nasze produkty na rynku europejskim",
};

export default function ProductsPage() {
  return (
    <>
      <PageTopSection title={plLang.title} description={plLang.description} />
      <ProductsSection />
      <OurPartners />
      <CallToActionSection />
    </>
  );
}
