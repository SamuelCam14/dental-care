import React from "react";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

const Header = () => {
  return (
    <header className="absolute top-10 left-0 w-full z-20 px-8">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
