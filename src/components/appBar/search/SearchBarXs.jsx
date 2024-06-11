import React from 'react'
import { Box, Button, IconButton, InputAdornment, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

function SearchBarXs() {
    const options = [
        { name: "Automobiles", link: "/categories/automobile", image: "/images/automobile.png" },
        { name: "Clothes and wears", link: "/categories/clothesAndWears", image: "/images/clothing2.png" },
        { name: "Home interiors", link: "/categories/homeInteriors", image: "/images/interior.png" },
        { name: "Computer and tech", link: "/categories/computerAndTech", image: "/images/computer.png" },
        { name: "Tools and equipments", link: "/categories/toolsAndEquipments", image: "/images/tools.png" },
        { name: "Sport and outdoor ", link: "/categories/sportsAndOutdoor", image: "/images/outdoor.png" },
        { name: "Animal and pets", link: "/categories/machineryAndTools", image: "/images/pets.png" },
        { name: "Machinery and tools", link: "/categories/automobile", image: "/images/machinery.png" },
        { name: "more categories", link: "/categories/", image: "/images/machinery.png" }
    ];
    return (
        <Box sx={{ overflow: "hidden", p: 2, display: { xs: "block", lg: "none" } }}>
            <InputBase
                sx={{ flex: 1, border: "2px solid #DEE2E7", mb: 2, width: "100%", p: 1, borderRadius: "5px", bgcolor: "#F7FAFC", color: "black" }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps' }}
                startAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            edge="start"
                        >
                            <SearchIcon sx={{ color: "black" }} />
                        </IconButton>
                    </InputAdornment>
                }
            />
            <Box className="scroll scroll-bar" sx={{ display: { xs: "flex", lg: "none" }, overflow: "auto", justifyContent: "space-between", width: "100%", whiteSpace: "nowrap" }}>
                <Box sx={{ width: "1400px", display: "flex", justifyContent: "space-between", p: 1 }}>
                    {options.map((data, index) => {
                        return (
                            <Button key={index} variant='contained' sx={{ width: "100%", ml: 1, bgcolor: "info.main", color: "secondary.main" }}>
                                <Link href={data.link}>
                                    {data.name}
                                </Link>
                            </Button>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}

export default SearchBarXs