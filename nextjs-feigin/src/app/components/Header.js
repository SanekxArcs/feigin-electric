import Image from "next/image";

import { TransitionLink } from "./utils/TransitionLink";

export default function Header() {
  return (
    <header>
      <div className="">
        <div className="flex justify-around items-center h-[10dvh]">
          <div className="logo-area">
            <TransitionLink href="/">
              <Image
                className="header-logo"
                width={200}
                height={50}
                src="https://feiginelectric.com/wp-content/themes/ecnology/images/feigin-electric-logo-light.svg"
                alt="Ecnology Logo"
              />
            </TransitionLink>
          </div>
          <div className="desktop-nav">
            <ul className="flex justify-between items-center gap-2">
              <li>
                <TransitionLink href="/">Home</TransitionLink>
              </li>
              <li>
                <TransitionLink href="/about">About</TransitionLink>
              </li>
              <li>
                <TransitionLink href="/ecod">ECOD</TransitionLink>
              </li>
              <li>
                <TransitionLink href="/cases">Case Studies</TransitionLink>
              </li>
              <li>
                <TransitionLink href="/blog">Blog</TransitionLink>
              </li>
              <li>
                <TransitionLink href="/contact">Contact</TransitionLink>
              </li>
            </ul>
          </div>
          <div className="dashboard-btn">
            <TransitionLink href="http://3.121.57.106:8890/" target="_blank">
              Online Monitoring
            </TransitionLink>
          </div>
          <button
            className="hamburger-icon-wrapper"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offCanvasMenu"
            aria-controls="offCanvasMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
