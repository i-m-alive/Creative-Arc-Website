"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Particles() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/lottie/ai-particles.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch(() => setAnimationData(null));
  }, []);

  if (!animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -1,
        opacity: 0.25,
        pointerEvents: "none",
      }}
    />
  );
}
