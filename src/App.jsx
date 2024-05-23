// import { TypewriterEffectSmoothDemo } from "./test"
import { Hero } from "./components/hero/Hero.jsx";
import { HeroParallaxDemo } from "./components/projects/project_component.jsx";
import "./App.css"
import { CardHoverEffectDemo } from "./components/card_hover/card_hover.jsx";
// import { GlobeDemo } from "./components/globe/globe_component.jsx";
import {Contact} from "./components/contact/Contact.jsx"
// import {VortexDemo} from "./components/vortexComponent/vartexUse.jsx"
// import {Navbar} from "./components/Navbar/NavbarComponent.jsx"
export default function App() {
  return (
    <div>
      {/* <div className="relative w-full flex items-center justify-center">
        <Navbar className="top-2" />      
      </div> */}
      <Hero/>
      <HeroParallaxDemo className="hero"/>
      <CardHoverEffectDemo/>
      <Contact/>
      {/* <VortexDemo/> */}
    </div>
  )
}