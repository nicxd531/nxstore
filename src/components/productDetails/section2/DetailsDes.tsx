import { Box, Typography,Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";

interface myComponentProps {
  data: items;
}
interface items {
  image?: string;
  ProductImages?: string[];
  title?: string;
  price?: number;
  ratings?: number;
  discount?: number;
  orders?: number;
  main_category?: string;
  sub_category?: string;
  shipping_status?: string;
  description?: string;
  status: string;
  reviews: string;
  PriceStatus: string;
  Type: string;
  Material: string;
  Design: string;
  Customization: string;
  Protection: string;
  Warranty: string;
  Model: string;
  Style: string;
  Certificate: string;
  Size: string;
  Memory: string;
  features:string[];
}

function DetailsDes({ data }: myComponentProps) {
  return (
    <Box>
      <Box>
        <Typography>{data?.description}</Typography>
      </Box>
      <Box
        sx={{
          mt: 3,
          borderRadius: 1,
          border: "1px solid #E0E7E9",
          width:{xs:"100%",lg: "60%"}
        }}
      >
        <Stack direction="row" sx={{ width: "100%", border: "1px solid #E0E7E9" }}>
          <Box
            sx={{ bgcolor: "#EFF2F4", width: "30%", p: 1, fontSize: "1.1rem",color:"black" }}
          >
            Model
          </Box>
          <Typography sx={{  p: 1, fontSize: "1.1rem" }}>{data?.Model}</Typography>
        </Stack>
        <Stack direction="row" sx={{ width: "100%", border: "1px solid #E0E7E9" }}>
          <Box
            sx={{ bgcolor: "#EFF2F4", width: "30%", p: 1, fontSize: "1.1rem" ,color:"black"}}
          >
            Style
          </Box>
          <Typography sx={{  p: 1, fontSize: "1.1rem" }}>{data?.Style}</Typography>
        </Stack>
        <Stack direction="row" sx={{ width: "100%", border: "1px solid #E0E7E9" }}>
          <Box
            sx={{ bgcolor: "#EFF2F4", width: "30%", p: 1, fontSize: "1.1rem" ,color:"black"}}
          >
            Certificate
          </Box>
          <Typography sx={{  p: 1, fontSize: "1.1rem" }}>{data?.Certificate}</Typography>
        </Stack>
        <Stack direction="row" sx={{ width: "100%", border: "1px solid #E0E7E9" }}>
          <Box
            sx={{ bgcolor: "#EFF2F4", width: "30%", p: 1, fontSize: "1.1rem" ,color:"black"}}
          >
            Size
          </Box>
          <Typography sx={{  p: 1, fontSize: "1.1rem" }}>{data?.Size}</Typography>
        </Stack>
        <Stack direction="row" sx={{ width: "100%", border: "1px solid #E0E7E9" }}>
          <Box sx={{ bgcolor: "#EFF2F4", width: "30%", p: 1,color:"black"}}>

          <Typography sx={{fontSize: "1.1rem" }}
           
          >
            Memory
          </Typography>
          </Box>
          <Typography sx={{  p: 1, fontSize: "1.1rem" }}>{data?.Memory}</Typography>
        </Stack>
      </Box>
      <Box sx={{mt:1}}>
        {data.features.map((data,index)=>{
            return<Typography sx={{mt:1}} key={data}><CheckIcon sx={{mr:1,color:"#8B96A5"}}/>{data}</Typography>
        })}
      </Box>
    </Box>
  );
}

export default DetailsDes;
