import {create} from "zustand"
import Link from "next/link";
import { Typography } from "@mui/material";





const breadcrumbsDr = create((set)=>({

    crurrentDr:[
        <Link
          underline="hover"
          key="1"
          color="inherit"
          href="/"
         
        >
          Home
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/categories"
         
        >
          <Typography  onClick={()=>selectDr(crurrentDr.pop())}>

          Categories
          </Typography>
        </Link>,
      ],
    selectDr:(crurrentDr)=>set({crurrentDr})
}))

export default breadcrumbsDr