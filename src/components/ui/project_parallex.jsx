import PropTypes from "prop-types";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  // useMotionValue,
} from "framer-motion";

export const HeroParallax = ({ products }) => {
  const rows = [products.slice(0, 5), products.slice(5, 10), products.slice(10, 16)];
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [1000, -1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [-1000, 1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-0 s:py-20 overflow-hidden antialiased relative flex flex-col self-auto perspective:1000px transform-style:preserve-3d"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="flex flex-col space-y-20"
      >
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex flex-nowrap space-x-20 mb-20 overflow-x-auto"
          >
            {row.map((product) => (
              <ProductCard
                product={product}
                translate={rowIndex % 2 === 0 ? translateX : translateXReverse}
                key={product.title}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

HeroParallax.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        MY PROJECTS 
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        I have built beautiful products with the latest technologies and frameworks.
        I am a passionate developer and designer that loves to build
        amazing products.
      </p>

      <p className="flex items-center max-w-2xl text-base md:text-xl mt-9 dark:text-neutral-200">
        Slide <FaArrowLeft className="ml-1 mr-1"/> left and right <FaArrowRight className="ml-1 mr-1" /> to view more. 
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl"
        target="_blank" // Opens link in new tab
        rel="noopener noreferrer" // Security best practice
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  translate: PropTypes.object.isRequired, // Updated this line
};
