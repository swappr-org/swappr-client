import React, { PropsWithChildren } from "react";

export default function BoldLabel({ children }: PropsWithChildren) {
  return (
    <h1 className="font-inter text-center text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
      {children}
    </h1>
  );
}
