import { useEffect, useState } from 'react';
import './hero.css';
// import NavbarSimple from '../Navbar/Navbar'
import { CanvasRevealEffectDemo } from '../canvas_reveal_effect/reveal_effect';
import { TypewriterEffectSmoothDemo } from '../typewriter/test';
import { VortexDemo } from '../vortexComponent/vartexUse';
export const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsSmallScreen(screenWidth <= 780);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* <NavbarSimple/> */}
      <div className="container">
        <div className={isSmallScreen ? 'rightDiv' : 'leftDiv'}>
          {isSmallScreen ? <VortexDemo/> : <TypewriterEffectSmoothDemo />}
          
          {/* <TypewriterEffectSmoothDemo /> */}
        </div>
        <div className={isSmallScreen ? 'leftDiv' : 'rightDiv'}>
          {isSmallScreen ? ''  : <CanvasRevealEffectDemo />} 
        </div>
      </div>
    </div>
  );
};
