import { TransitionLink } from "./utils/TransitionLink";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import HighlightedText from "./HighlightedText";

interface NavItemProps {
  href: string;
  label: string;
  className?: string; 
}


export default function NavItem({ href, label, className = "" }: NavItemProps) {
  const pathname = usePathname();
  const handleLinkClick = (href: string) => {
    console.log(`Navigating to ${href}`);
  };
  return (
    <Button
      variant="link"
      className={`hover:text-fgreen-800 font-bold p-1 xl:p-2 ${className}
          ${pathname === href ? "text-primary " : " text-muted-foreground "}`}
    >
      <TransitionLink href={href} onClick={() => handleLinkClick(href)}>
        {pathname === href ? <HighlightedText title={label} borderSize="h-0.5"/> : label }
      </TransitionLink>
    </Button>
  );
}