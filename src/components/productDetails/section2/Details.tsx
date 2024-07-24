"use client";
import { Box, Paper, Typography } from "@mui/material";
import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DetailsDes from "./DetailsDes";


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
    Model: string;
    Style: string;
    Certificate: string;
    Size: string;
    Memory: string;
    features:string[];
}
function Details({data}:myComponentProps) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Paper color="secondary" sx={{ width: {xs:"100%",lg:"77%"}}}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext    value={value}>
          <Box color="secondary" sx={{ borderBottom: 1, borderColor: "divider"}}>
            <TabList
              color="secondary"
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{bgcolor:"#C6F3F1"}}
            >
              <Tab color="secondary"  label="Description" value="1" />
              <Tab color="secondary"  label="Reviews" value="2" />
              <Tab color="secondary"  label="Shipping" value="3" />
              <Tab color="primary"  label="About company" value="4" />
            </TabList>
          </Box>
          <TabPanel sx={{minHeight:"400px"}} value="1">
            <DetailsDes data={data}/>
          </TabPanel>
          <TabPanel value="2" sx={{minHeight:"400px" ,display:"flex",justifyContent:"center",alignItems:"center"}}> <Typography sx={{fontSize:"1.5rem",fontWeight:"bold"}}>Coming soon</Typography></TabPanel>
          <TabPanel value="3"  sx={{minHeight:"400px" ,display:"flex",justifyContent:"center",alignItems:"center"}}> <Typography sx={{fontSize:"1.5rem",fontWeight:"bold"}}>Coming soon</Typography></TabPanel>
          <TabPanel 
          value="4"
          sx={{minHeight:"400px" ,display:"flex",justifyContent:"center",alignItems:"center"}}
          >
            <Typography sx={{fontSize:"1.5rem",fontWeight:"bold"}}>Coming soon</Typography>
          </TabPanel>
        </TabContext>
      </Box>
    </Paper>
  );
}

export default Details;
