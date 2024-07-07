import PropTypes from 'prop-types';
import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import spacemanScene from "../../assets/3d/spaceman.glb"
import CanvasLoader from "./Loader";

const Spaceman = ({ scale, position, rotation }) => {
  const spacemanRef = useRef();
  const { scene, animations } = useGLTF(spacemanScene);
  const { actions } = useAnimations(animations, spacemanRef);
  const [floatingTimer, setFloatingTimer] = useState(0);

  useEffect(() => {
    actions["Idle"].play();
  }, [actions]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingTimer(prev => prev + 1);
    }, 50); // Adjust the interval as needed for smoother animation

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeFactor = 0.01; // Adjust this value to control the floating speed
    const xOffset = Math.sin(floatingTimer * timeFactor) * 1;
    const yOffset = Math.cos(floatingTimer * timeFactor) * 1;

    spacemanRef.current.position.x = position[0] + xOffset;
    spacemanRef.current.position.y = position[1] + yOffset;
  }, [floatingTimer, position]);

  return (
    <mesh ref={spacemanRef} position={position} scale={scale} rotation={rotation}>
      <primitive object={scene} />
    </mesh>
  );
};

export const SpacemanCanvas = ({ scrollContainer }) => {
  const [scale, setScale] = useState([2, 2, 2]);
  const [position, setPosition] = useState([2, -0.7, 0]);
  const [rotation, setRotation] = useState([0, 2.2, 0]);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const speedFactor = 0.2; // Adjust this value to control the speed of the movement

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([1, 1, 1]);
        setPosition([0.2, -0.1, 0]);
      } else if (window.innerWidth < 1024) {
        setScale([1.33, 1.33, 1.33]);
        setPosition([0.8, -0.3, 10]);
      } else if (window.innerWidth < 1280) {
        setScale([1.5, 1.5, 1.5]);
        setPosition([0.8, -0.4, 10]);
      } else if (window.innerWidth < 1536) {
        setScale([1.66, 1.66, 1.66]);
        setPosition([2, -0.5, 10]);
      } else {
        setScale([2, 2, 2]);
        setPosition([2, -0.7, 0]);
      }
    };

    const handleMouseMove = (event) => {
      setMouseX((event.clientX / window.innerWidth - 0.5) * speedFactor);
      setMouseY((event.clientY / window.innerHeight - 0.5) * speedFactor);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [scrollContainer]);

  useEffect(() => {
    setPosition([2 + mouseX * 5, -0.7 + mouseY * 5, 0]);
    setRotation([mouseY * Math.PI, 2.2 + mouseX * Math.PI, 0]);
  }, [mouseX, mouseY]);

  return (
    <Canvas className={`w-full h-screen bg-transparent z-10`} camera={{ near: 0.1, far: 1000 }}>
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

        <Spaceman scale={scale} position={position} rotation={rotation} />
      </Suspense>
    </Canvas>
  );
};

SpacemanCanvas.propTypes = {
  scrollContainer: PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  }).isRequired
};

Spaceman.propTypes = {
  scale: PropTypes.arrayOf(PropTypes.number).isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  rotation: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default SpacemanCanvas;
