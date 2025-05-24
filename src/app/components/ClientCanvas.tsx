"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import ScrollStars from "./ScrollStars";

export default function ClientCanvas() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 1] }}>
      <ScrollStars />
    </Canvas>
  );
}
