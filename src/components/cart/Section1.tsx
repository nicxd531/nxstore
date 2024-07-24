"use client";
import {
  Paper,
  Typography,
  Box,
  Stack,
  Button,
  TextField,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import Link from "next/link";
import PaginationBottom from "../categories/Main/PaginationBottom";
import data from "../../data/cart.json";
import PriceCard from "./PriceCard";
import Products from "./Products";

function Section1() {
  // states for current page
  const [currentPage, setCurrentPage] = React.useState(1);
  const [items, setitems] = React.useState(4);
  const itemsPerPage = items; // Set the number of items per page
  const totalPages = Math.ceil(data?.length / itemsPerPage);
  // data slicing constant for items on each page
  const FilteredData = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <Stack direction="column">
      <Box>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "1.4rem" }}
        >{`My cart ( ${3})`}</Typography>
      </Box>
      <Stack justifyContent="space-between" direction={{xs:"column",lg:"row"}} sx={{ mt: 2 }}>
        <Paper sx={{ width:{xs:"100%",lg: "73%"}, minHeight: "500px", p: 2 }}>
          <Box sx={{mb:4}}>
            {FilteredData.map((data, index) => {
              return <Products data={data} key={index} />;
            })}
          </Box>
          {data.length >= 4 && (
            <PaginationBottom
              setCurrentPage={setCurrentPage}
              setitems={setitems}
              totalPages={totalPages}
            />
          )}
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%",mt:2 }}
          >
            <Button
              color="secondary"
              variant="contained"
              startIcon={<ArrowBackIcon />}
            >
              <Link href="/">Back to shop</Link>
            </Button>
            <Button variant="contained">Remove all</Button>
          </Stack>
        </Paper>
        <Stack sx={{ width: {xs:"100%",lg:"25%"} }}>
          <Paper sx={{ width: "100%", minHeight: "110px", p: 1 }}>
            <Typography sx={{ fontSize: "1.2rem", mt: 1 }}>
              Have a coupon?
            </Typography>
            <Stack direction="row" sx={{ mt: 2 }}>
              <TextField
                size="small"
                sx={{
                  width: "65%",
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  p: 0,
                }}
                id="outlined-basic"
                label="Add coupon"
                variant="outlined"
              />
              <Button
                variant="contained"
                sx={{
                  width: "35%",
                  color: "secondary.main",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  boxShadow: "none",
                  border: "1px solid #E4E4E4",
                }}
              >
                Apply
              </Button>
            </Stack>
          </Paper>
          <Paper sx={{ width: "100%", minHeight: "302px", mt: 2 }}>
            <PriceCard />
          </Paper>
        </Stack>
      </Stack>
      
    </Stack>
  );
}

export default Section1;
