

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>

      <div className=" bg-primary py-4 rounded-t-3xl mx-1 shadow-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="text-left text-secondary">
              <span>Copyright © {currentYear} Feigin Electric</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
