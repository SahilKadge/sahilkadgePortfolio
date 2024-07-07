import { useRef, useEffect, useState } from "react";
import { Hero } from "./components/hero/Hero.jsx";
import { HeroParallaxDemo } from "./components/projects/project_component.jsx";
import "./App.css";
import { CardHoverEffectDemo } from "./components/card_hover/card_hover.jsx";
import { Contact } from "./components/contact/Contact.jsx";
import { VortexDemo } from "./components/vortexComponent/vartexUse.jsx";
import { Navbar } from "./components/Navbar/NavbarComponent.jsx";

export default function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsSmallScreen(screenWidth <= 780);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const wrapperRef = useRef(null);
  const heroRef = useRef(null);
  const heroParallaxRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="relative w-full flex items-center justify-center">
        <Navbar
          className="top-2"
          onMenuItemClick={(item) => {
            switch (item) {
              case "Home":
                scrollToRef(heroRef);
                break;
              case "Projects":
                scrollToRef(heroParallaxRef);
                break;
              case "Contact":
                scrollToRef(contactRef);
                break;
              default:
                break;
            }
          }}
        />
      </div>
      {isSmallScreen ? (
        <VortexDemo />
      ) : (
        <div className="wrapper" ref={wrapperRef}>
          <div id="hero" className="z-10" ref={heroRef}>
            <Hero scrollContainer={wrapperRef} />
          </div>
        </div>
      )}
      <div ref={heroParallaxRef}>
        <HeroParallaxDemo className="hero" />
      </div>
      <CardHoverEffectDemo />
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
