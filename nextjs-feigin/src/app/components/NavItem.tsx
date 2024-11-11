// FILE: NavItem.js
import { TransitionLink } from "./utils/TransitionLink";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function NavItem({ href, label }) {
  const pathname = usePathname();

  return (
      <Button
        variant="link"
        className={`hover:text-fgreen-800 font-bold 
          ${pathname === href ? "text-primary " : " text-muted-foreground "}
        `}
      >
        <TransitionLink href={href} onClick={() => handleLinkClick(href)}>
          {label}
        </TransitionLink>
      </Button>
  );
}