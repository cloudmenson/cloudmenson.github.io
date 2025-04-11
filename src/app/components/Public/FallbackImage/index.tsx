"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

import { fallbackImage as img } from "@/app/assets";

const fallbackSrc = img;

export const FallbackImage = (props: ImageProps) => {
  const [src, setSrc] = useState(props.src);

  return (
    <Image
      {...props}
      fill
      src={src}
      alt={props.alt || "Image"}
      onError={() => setSrc(fallbackSrc)}
    />
  );
};
