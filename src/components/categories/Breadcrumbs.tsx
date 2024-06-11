"use client";
import React from "react";
import { Box } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import breadcrumbsDr from "../../zustand/breadcrumbsDr";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Breadcrumb() {
  const { crurrentDr } = breadcrumbsDr();
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter((el: any) => el.length > 0);
  return (
    <Box
      sx={{
        width: "100%",
        height: "64px",
        display: {xs:"none",lg:"flex"},
        alignItems: "center",
        ml: { xs: 1, lg: 0 },
        fontSize: { lg: "1.3rem" },
      }}
    >
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="medium" />}
        aria-label="breadcrumb"
        sx={{ fontSize: { lg: "1.2rem" } }}
      >
        <Link key="1" color="inherit" href="/">
          Home
        </Link>
        {pathArray.map((path, index) => {
          const fullPath = `/${pathArray.slice(0, index + 1).join("/")}`;

          if (index === pathArray.length - 1) {
            return (
              <Typography
                sx={{ fontSize: { lg: "1.2rem" } }}
                key={fullPath}
                color="textPrimary"
              >
                {path}
              </Typography>
            );
          } else {
            return (
              <Box
                component="div"
                key={fullPath}
                sx={{ textTransform: "capitalize" }}
              >
                <Link href={fullPath} passHref>
                  {path}
                </Link>
              </Box>
            );
          }
        })}
      </Breadcrumbs>
    </Box>
  );
}

export default Breadcrumb;
