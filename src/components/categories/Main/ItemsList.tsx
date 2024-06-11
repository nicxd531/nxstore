import React from "react";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";

interface items {
  image: string;
  title: string;
  price: number;
  ratings: number;
  discount: number;
  orders: number;
  main_category: string;
  sub_category: string;
  shipping_status?: string;
  description?: string;
}
interface myComponentProps {
  data: items;
}
function itemsList({ data }: myComponentProps) {
  function calculateDiscount(price: number, discountPercent: number): number {
    if (price < 0 || discountPercent < 0 || discountPercent > 100) {
      throw new Error("Invalid price or discount percentage");
    }

    const discountAmount = (price * discountPercent) / 100;
    const discountedPrice = price - discountAmount;

    return discountedPrice;
  }
  const likeBtn = {
    width: "22px",
    height: "22px",
  };

  // Example usage
  const originalPrice: number = data.price; // $100
  const discount: number = data.discount; // 20%

  const finalPrice: number = calculateDiscount(originalPrice, discount);
  return (
    <Paper>
      <IconButton
        sx={{
          height: { xs: "144px", lg: "230px" },
          width: "100%",
          borderRadius: 0,
          display: "flex",
          flexWrap: "wrap",
          color: "black",
        }}
      >
        <Box
          sx={{
            width: "20%",
            height: "100%",
          }}
        >
          <img
            src={data.image}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt=" product image"
          />
        </Box>
        <Stack
          justifyContent="space-between"
          sx={{
            width: "80%",
            pl: 2,
            height: "90%",
          }}
        >
          <Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                sx={{
                  fontSize: {  lg: "1.3rem" },
                  fontWeight: "bold",
                }}
              >
                {data.title}
              </Typography>
              <IconButton
                sx={{
                  borderRadius: 0,
                }}
              >
                <Paper
                  sx={{
                    p: 0.5,
                  }}
                >
                  {true ? (
                    <FavoriteBorderIcon color="secondary" sx={likeBtn} />
                  ) : (
                    <FavoriteIcon color="secondary" sx={likeBtn} />
                  )}
                </Paper>
              </IconButton>
            </Stack>
          </Box>
          <Stack
            alignItems="center"
            flexDirection="row"
            flexWrap="wrap"
            sx={{ width: "100%" }}
          >
            <Typography
              sx={{
                mr: 1,
                fontSize: { xs: "1.2rem", lg: "1.2rem" },
                fontWeight: "bold",
              }}
            >
              ${finalPrice}
            </Typography>
            {finalPrice !== originalPrice && (
              <Typography
                sx={{ fontSize: {lg:"1.4rem"} }}
                className="text-muted text-line-through"
              >
                ${originalPrice}
              </Typography>
            )}
          </Stack>
          <Stack direction="row">
            <Stack direction="row" sx={{ color: "#ffc107" }}>
              <Rating
                readOnly
                name="half-rating"
                defaultValue={data.ratings}
                precision={0.5}
              />
              <Typography
                sx={{
                  color: "#ffc107",
                  fontWeight: "bold",
                  fontSize: {  lg: "1.2rem" },
                  ml:1
                }}
              >
                {data.ratings}
              </Typography>
            </Stack>
            <Typography
              sx={{
                fontSize: {  lg: "1.2rem" },
                fontWeight: "bold",
                ml:1
              }}
              className="text-muted"
            >
              • {data.orders} orders •
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "1.2rem" },
                fontWeight: "bold",
                ml:1
              }}
            >
              {" "}
              {data.shipping_status}
            </Typography>
          </Stack>
          <Box sx={{ width: "80%", textAlign: "start" ,display:{xs:"none",lg:"block"}}}>
            <Typography
              sx={{
                fontSize: { lg: "1.2rem" },
                fontWeight: "bold",
                
              }}
              className="text-muted"
            >
              {data.description}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "start" }}>
            <Button color="secondary"><Link href={`/categories/${data.main_category}/${data.id}/${data.slug}`}> View details</Link></Button>
          </Box>
        </Stack>
      </IconButton>
    </Paper>
  );
}

export default itemsList;
