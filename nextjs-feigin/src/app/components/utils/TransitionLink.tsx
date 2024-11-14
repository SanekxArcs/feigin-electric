"use client";

import Link,{ LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React from "react"; // Import React types to ensure everything is properly typed

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    // Ensure you have a 'main' element for the body selector to apply transitions.
    const body = document.querySelector("main");
    if (body) {
      body.classList.add("page-transition");

      // Wait for the page transition to complete
      await sleep(200);

      // Push the new route
      router.push(href);

      // Wait for the next animation step (if needed)
      await sleep(200);

      body.classList.remove("page-transition");
    }
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};
