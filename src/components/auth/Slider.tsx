"use client"
import { Carousel, RadioGroup, Radio, Divider } from 'rsuite';
import 'rsuite/Carousel/styles/index.css';
import React from "react"
import { Box } from '@mui/material';

const RadioLabel = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => <label style={{ padding: 7 }}>{children}</label>;

interface myComponentProps {
  images:string[]
}
export default function Slider({images}:myComponentProps) {
  const [placement, setPlacement] = React.useState('bottom');
  const [shape, setShape] = React.useState('dot');

  return (

    <Box sx={{width:"50%",height:"100%"}} >
      
      <Carousel
        key={`left.bar`}
        placement={"left"}
        shape={"bar"}
        className="custom-slider"
        autoplay
        style={{height:"100%",width:"100%"}}
      >
        {
          images.map((data, index)=>{
            return(
              <img key={index} alt='image' style={{objectFit:"cover",height:"100%",width:"100%"}} src={data}  />
            )
          })
        }
      </Carousel>
    </Box>
  );
}

