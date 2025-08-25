"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "50px",
        height: "50px",
        backgroundColor: "#70117C",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "transform 0.1s ease",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
