import './contact.css'
import { useEffect, useState } from 'react';
import { SignupFormDemo } from './form';
import {EarthModel} from '../Earth/EarthModel';
// import { GlobeDemo } from '../globe/globe_component';

export const Contact = () => {
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
    
      <div className="container">
        <div className="leftDiv">
          <EarthModel/>
        </div>
        <div className="rightDiv">
          <SignupFormDemo/>
        </div>
      </div>
      
    </div>
  )
};