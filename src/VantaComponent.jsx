import React, { useEffect, useRef } from "react";
import VANTA from "vanta/dist/vanta.birds.min";

const VantaComponent = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    // Initialize Vanta.js effect
    const vantaEffect = VANTA.BIRDS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color1: 0xea1919,
      birdSize: 1.30,
      separation: 30.00,
      alignment: 22.00
    });

    // Clean up the effect when the component unmounts
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return <div ref={vantaRef} style={{ width: "100%", height: "100vh" }} />;
};

export default VantaComponent;
