import SpacemanCanvas from "./Spaceman";

import PropTypes from 'prop-types';
import { TypewriterEffectSmoothDemo } from "../typewriter/test";

export const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      

      <img className="parallax__stars" src="./parallax/1Stars.svg" alt="" />
      <img className="parallax__planets" src="./parallax/2Planets.svg" alt="" />
      <img className="parallax__mountain1" src="./parallax/3Mountain.svg" alt="" />
      <img className="parallax__mountain2" src="./parallax/4Mountain.svg" alt="" />
      <img className="parallax__crater" src="./parallax/5Crater.svg" alt="" />
      <img className="parallax__sun" src="./parallax/6Sun.svg" alt="" />
      <div className='parallax__content absolute left-[5%] top-[5%] sm:top-[12%] lg:top-[2%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start '>
        <div className="flex-1 lg:mb-0">
          <div className='font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[180px] leading-[110px] 2xl:leading-[160px]'>
            <TypewriterEffectSmoothDemo />
          </div>
        </div>
        <div className="flex-1 flex justify-start mt-0 sm:mt-14 ml-8 xs:ml-[-4vh] sm:ml-[-17vh] md:ml-[-26vh] lg:mt-0 2xl:mt-0">
          {/* Additional content if needed */}
        </div>
      </div>
      <SpacemanCanvas scrollContainer={scrollContainer} />
    </section>
  );
};

Hero.propTypes = {
  scrollContainer: PropTypes.object.isRequired
};

export default Hero;
