import { useEffect, useState } from 'react';
import { useGLTF } from "@react-three/drei";
import "./earth.css";

const Earth = () => {
  // const [scale, setScale] = useState(3);
  const earth = useGLTF("./planet/scene.gltf");

  // useEffect(() => {
  //   const handleResize = () => {
  //     const screenWidth = window.innerWidth;
  //     if (screenWidth <= 780) {
  //       setScale(2);
  //     } else {
  //       setScale(3);
  //     }
  //   };

  //   handleResize();

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} className="Earth" />
  );
};

export default Earth;
