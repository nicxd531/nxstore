import React from "react";
import {
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
  Rating,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";

interface items {
  image?: string;
  title?: string;
  price?: number;
  ratings?: number;
  discount?: number;
  orders?: number;
  main_category: string;
  sub_category: string;
  shipping_status?: string;
  description?: string;
}
interface myComponentProps {
  data: items;
}

function ItemGrid({ data }: myComponentProps) {
  function calculateDiscount(price: number, discountPercent: number): number {
    if (price < 0 || discountPercent < 0 || discountPercent > 100) {
      throw new Error("Invalid price or discount percentage");
    }

    const discountAmount = (price * discountPercent) / 100;
    const discountedPrice = price - discountAmount;

    return discountedPrice;
  }
  // Example usage
  const originalPrice: number = data.price; // $100
  const discount: number = data.discount; // 20%

  const finalPrice: number = calculateDiscount(originalPrice, discount);
  const likeBtn = {
    width: "22px",
    height: "22px",
  };
  return (
    <Paper>
      <Link href={`/categories/${data.main_category}/${data.id}/${data.slug}`}>
        <IconButton
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: { xs: "314px", lg: "405px" },
            color: "black",
            borderRadius: 0,
          }}
        >
          <Box
            sx={{
              width: "100%%",
              height: "70%",
            }}
          >
            <img
              src={data.image}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=" product image"
            />
          </Box>
          <Box sx={{ height: "30%", width: "100%" }}>
            <Divider color="secondary" sx={{ width: "100%" }} />
            <Stack direction="row" sx={{ p: 2, height: "100%" }}>
              <Stack
                justifyContent="space-between"
                sx={{
                  width: { xs: "90%", lg: "80%" },
                  textAlign: "start",
                  height: "100%",
                }}
              >
                <Stack
                  alignItems="center"
                  flexDirection="row"
                  flexWrap="wrap"
                  sx={{ width: "100%" }}
                >
                  <Typography
                    sx={{
                      mr: 1,
                      fontSize: { xs: "1rem", lg: "1.3rem" },
                      fontWeight: "bold",
                    }}
                  >
                    ${finalPrice}
                  </Typography>
                  {finalPrice !== originalPrice && (
                    <Typography
                      sx={{ fontSize: { xs: "0.9rem", lg: "1.3rem" } }}
                      className="text-muted text-line-through"
                    >
                      ${originalPrice}
                    </Typography>
                  )}
                </Stack>
                <Stack direction="row" sx={{ color: "#ffc107" }}>
                  <Rating
                    readOnly
                    name="half-rating"
                    defaultValue={data.ratings}
                    precision={0.5}
                  />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "1rem", lg: "1.3rem" },
                      ml: 1,
                    }}
                  >
                    {data.ratings}
                  </Typography>
                </Stack>

                <Typography
                  className="text-muted"
                  sx={{
                    fontSize: { xs: "1rem", lg: "1.3rem" },
                    fontWeight: "bold",
                  }}
                >
                  {data.title}
                </Typography>
              </Stack>
              <Box>
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
              </Box>
            </Stack>
          </Box>
        </IconButton>
      </Link>
    </Paper>
  );
}

export default ItemGrid;
