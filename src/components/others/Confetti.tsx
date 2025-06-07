"use client";
import React from "react";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Confetti() {
  const { width, height } = useWindowSize();
  return (
    <ReactConfetti
      className="relative z-20"
      width={width}
      height={height}
      recycle={false}
    />
  );
}
