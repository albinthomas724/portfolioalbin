"use client";
import React, { Children } from "react";
import { PinContainer } from "./3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"></PinContainer>
    </div>
  );
}
