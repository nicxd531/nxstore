import React from 'react'
import { Box, Button, IconButton, InputAdornment, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBarXs() {
    const options = [
        'Automobiles',
        'Clothes and wears',
        'Home interiors',
        'Computer and tech',
        'Tools and equipments',
        'Sport and outdoor ',
        'Animal and pets',
        'Machinery and tools',
        'More Categories',
    ];
    return (
        <Box sx={{ overflow: "hidden", p: 2 ,display: { xs: "block", lg: "none" }}}>
            <InputBase
                sx={{ flex: 1, border: "2px solid #DEE2E7", mb: 2, width: "100%", p: 1, borderRadius: "5px",bgcolor:"#F7FAFC",color:"black" }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps'}}
                startAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            edge="start"
                        >
                            <SearchIcon sx={{color:"black"}}/>
                        </IconButton>
                    </InputAdornment>
                }
            />
            <Box className="scroll scroll-bar" sx={{ display: { xs: "flex", lg: "none" }, overflow: "auto", justifyContent: "space-between" ,width:"100%",whiteSpace:"nowrap"}}>
                <Box sx={{ width: "1400px", display: "flex", justifyContent: "space-between",p:1 }}>
                    {options.map((data, index) => {
                        return (
                            <Button  key={index} variant='contained' sx={{width:"100%",ml:1, bgcolor:"info.main",color:"secondary.main"}}>
                                {data}
                            </Button>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}

export default SearchBarXs