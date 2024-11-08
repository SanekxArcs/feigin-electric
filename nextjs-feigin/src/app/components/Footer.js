// components/Footer.jsx

import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-8 rounded-t-3xl mx-1 shadow-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="border-t border-secondary mt-8 pt-4">
          <p className="text-secondary text-center">
            © {currentYear} Feigin Electric. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
