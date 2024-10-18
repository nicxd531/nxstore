"use client";
import { Carousel, RadioGroup, Radio, Divider } from "rsuite";
import "rsuite/Carousel/styles/index.css";
import React from "react";
import { Box } from "@mui/material";
import Image from "../reuseables/Image";


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
              key={index}
              alt="image"
              path={data}
              fill={false}
              height="300"
              width="300"
              loading="lazy"
              transformation={[{quality:100}]}
              lqip={{active:true, quality:80}}
            />
          );
        })}
      </Carousel>
    </Box>
  );
}
