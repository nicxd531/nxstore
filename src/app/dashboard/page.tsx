"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import SideNav from "@/components/dashboard/SideNav";
import Main from "@/components/dashboard/Main";
import "../../components/dashboard/dashboard.css"

function Page() {
  const { data: session } = useSession();
  const router =useRouter()
  if(!session){
    router.push("/login")
  }
  
  return (
    <Stack flexDirection={"row"} sx={{mt:{lg:4},width:"100%",boxSizing:"border-box"}}>
      <SideNav/>
      <Main/>
    </Stack>
  );
}

export default Page;
