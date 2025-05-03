"use client";

import React, { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

const ScrollStars = React.memo(function ScrollStars() {
  const group = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const scrollRef = useRef(0);
  const { invalidate } = useThree();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      invalidate();
    };
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x =
        Math.round((event.clientX / window.innerWidth) * 100) / 50 - 1;
      mouse.current.y =
        -Math.round((event.clientY / window.innerHeight) * 100) / 50 + 1;
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [invalidate]);

  useFrame(() => {
    if (group.current) {
      scrollRef.current += (scrollY - scrollRef.current) * 0.05;
      group.current.rotation.y +=
        (mouse.current.x * 0.2 - group.current.rotation.y) * 0.05;
      group.current.rotation.x +=
        (mouse.current.y * 0.2 - group.current.rotation.x) * 0.05;
      group.current.position.z = -scrollRef.current * 0.7;
    }
  });

  return (
    <group ref={group}>
      <Stars radius={120} depth={80} count={2500} factor={5} fade />
    </group>
  );
});

export default ScrollStars;
