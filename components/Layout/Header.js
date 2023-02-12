import React, { useRef, useEffect } from "react";
import { Layout as AntLayout } from "antd";
import Logo from "@/assets/images/logo.svg";
import HeaderDesktopMenu from "./Header.DesktopMenu";
import HeaderMobileMenu from "./Header.MobileMenu";
import Link from "next/link";

const Header = () => {
  const headerRef = useRef(null),
    toggleNavOnScroll = () => {
      const { body, documentElement } = document;
      (body.scrollTop || documentElement.scrollTop > 100)
        ? headerRef.current.classList.add("scrolled")
        : headerRef.current.classList.remove("scrolled");

    };

  useEffect(() => {
    document.body.addEventListener("scroll", toggleNavOnScroll);
    return () => {
      document.body.removeEventListener("scroll", toggleNavOnScroll);
    };
  }, []);

  return (
    <AntLayout.Header ref={headerRef}>
      <div className="container">
        <div className="brand-logo">
          <Link href="/" >
            <a aria-label="ParamTech">
              <Logo />
            </a>
          </Link>
        </div>

        <HeaderDesktopMenu />

        <HeaderMobileMenu />

      </div>
    </AntLayout.Header >
  );
};

export default Header;