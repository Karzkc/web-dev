import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      <Image className="mx-auto object-cover" height={100} width={100}  src="http://www.menucool.com/slider/prod/image-slider-3.jpg" alt="" />
    </div>
  );
}
