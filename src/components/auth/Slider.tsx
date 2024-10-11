"use client";
import { Carousel, RadioGroup, Radio, Divider } from "rsuite";
import "rsuite/Carousel/styles/index.css";
import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

const RadioLabel = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <label style={{ padding: 7 }}>{children}</label>;

interface myComponentProps {
  images: string[];
}
export default function Slider({ images }: myComponentProps) {
  const [placement, setPlacement] = React.useState("bottom");
  const [shape, setShape] = React.useState("dot");

  return (
    <Box sx={{ width: "50%", height: "100%" ,display:{xs:"none",lg:"block"}}}>
      <Carousel
        key={`left.bar`}
        placement={"left"}
        shape={"bar"}
        className="custom-slider"
        autoplay
        style={{ height: "100%", width: "100%" }}
      >
        {images.map((data, index) => {
          return (
            <Image
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA..."
              placeholder="blur"
              quality={90}
              key={index}
              alt="image"
              width={300}
              height={300}
              className="image-next"
              style={{ height: "100%", width: "100%",objectFit:"cover" }}
              src={data}
            />
          );
        })}
      </Carousel>
    </Box>
  );
}
