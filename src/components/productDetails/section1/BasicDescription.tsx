import React from "react";
import { Box, Stack, Typography, Rating, Divider } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import ChatIcon from "@mui/icons-material/Chat";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MiniDescription from "./MiniDescription";
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
    PriceStatus:string;
    Type:string;
    Material:string;
    Design:string;
    Customization:string;
    Protection:string;
    Warranty:string;
}
function BasicDescription({ data }: myComponentProps) {
  const status =
    data?.status == "In stock" ? (
      <Stack
        direction="row"
        flexWrap="wrap"
        sx={{
          fontWeight: "bold",
          color: data?.status == "In stock" ? "#00B517" : "#FA3434",
          width: "100%",
        }}
      >
        <CheckIcon />{" "}
        <Typography sx={{ fontSize: "1.2rem" }}>{data?.status}</Typography>
      </Stack>
    ) : (
      <Stack direction="column">
        {" "}
        <CloseIcon
          sx={{
            color: data?.status == "In stock" ? "#00B517" : "#FA3434",
            width: "100%",
          }}
        />
        <Typography sx={{ fontSize: "1.2rem" }}>{data?.status}</Typography>
      </Stack>
    );
  return (
    <Box sx={{ width: {xs:"100%",lg:"37%"}, height: "100%" }}>
      <Stack direction="row" flexWrap="wrap">
        {status}
        <Typography
          sx={{ fontWeight: "bold", fontSize: "1.3rem", width: "80%" }}
        >
          {data?.title}
        </Typography>
      </Stack>
      <Stack justifyContent="space-between" direction="row" sx={{my:1}}>
        <Stack direction="row" sx={{ color: "#ffc107" }}>
          <Rating
            readOnly
            name="half-rating"
            defaultValue={data?.ratings}
            precision={0.5}
          />
          <Typography
            sx={{
              color: "#ffc107",
              fontWeight: "bold",
              fontSize: { lg: "1.1rem" },
              ml: 1,
            }}
          >
            {data.ratings}
          </Typography>
        </Stack>
        <Stack sx={{ color: "#8B96A5" }} direction="row">
          •
          <ChatIcon sx={{ ml: 1 }} />
          <Typography
            sx={{
              fontSize: { lg: "1.1rem" },
              fontWeight: "bold",
              ml: 1,
          color:"#8B96A5"
             
            }}
            
          >
            {data.reviews} reviews
          </Typography>
        </Stack>
        <Stack alignItems="center" sx={{ color: "#8B96A5" }} direction="row">
          •
          <ShoppingBasketIcon sx={{ ml: 1 }} />
          <Typography
            sx={{
              fontSize: { lg: "1.1rem" },
              fontWeight: "bold",
              ml: 1,
            }}
            
          >
            {data.orders} reviews
          </Typography>
        </Stack>
      </Stack>
      <Stack
        justifyContent="space-between"
        direction="row"
        sx={{ p: 2, bgcolor: "#FFF0DF" ,my:2}}
      >
        <Stack sx={{color: "#8B96A5"}}>
        <Box sx={{ color: "#FA3434" }}><Typography sx={{fontSize:"1.3rem",fontWeight:"bold"}} >${data.price}.00</Typography></Box>
          <Box sx={{ color: "#787A80",fontSize:"1rem",fontWeight:"bold"}}><Typography >50-100 pcs</Typography></Box>
        </Stack>
        <Divider sx={{border:"1px solid #BDC1C8"}} orientation="vertical" flexItem />
        <Stack sx={{color: "#8B96A5"}}>
          <Typography sx={{fontSize:"1.3rem",fontWeight:"bold"}}>${data.price}.00</Typography>
          <Box sx={{ color: "#787A80",fontSize:"1rem" ,fontWeight:"bold"}}><Typography >100-700 pcs</Typography></Box>
          
        </Stack>
        <Divider  sx={{border:"1px solid #BDC1C8"}} orientation="vertical" flexItem />
        <Stack sx={{color: "#8B96A5"}}>
          <Typography sx={{fontSize:"1.3rem",fontWeight:"bold", color: "#8B96A5"}}>${data.price}.00</Typography>
          <Box sx={{ color: "#787A80" ,fontSize:"1rem",fontWeight:"bold"}}> <Typography>700+ pcs</Typography></Box>
        </Stack>
      </Stack>
      <Stack>
        <MiniDescription data={data}/>
      </Stack>
    </Box>
  );
}

export default BasicDescription;
