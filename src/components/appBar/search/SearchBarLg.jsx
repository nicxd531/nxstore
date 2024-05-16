import React from 'react'
import { Box, Button, ButtonGroup, Divider } from '@mui/material'
import InputBase from '@mui/material/InputBase';
import Form from 'react-bootstrap/Form';
import sendTheme from "../../../zustand/sendTheme"

function SearchBarLg() {
    const { selectedTheme } = sendTheme()
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <ButtonGroup sx={{ border: "2px solid #0D6EFD", borderRadius: "5px", p: 0, overflow: "hidden", display: { xs: "none", lg: "flex" } }}>
            <InputBase
                sx={{ ml: 1, flex: 1, width: "280px", p: 0.5, height: "100%"}}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <Divider orientation='vertical' sx={{ height: "35px", bgcolor: "secondary.main", width: "2px" }} />

            <Form.Select className='ml-1 w-25' aria-label="Default select example"  style={{ paddingLeft: "2px",fontSize: "1rem", backgroundColor: "transparent", border: "none", color: `${selectedTheme == "dark" ? "white" : "black"}`,Width:"120px" ,marginLeft:"2px solid black"}}>
                <option style={{ color: `${selectedTheme == "dark" ? "white" : "black"}` }}>All categories</option>
                <option style={{ color: "black" }} value="1">
                    One
                </option>
                <option style={{ color: "black" }} value="2">
                    Two
                </option>
                <option style={{ color: "black" }} value="3">
                    Three
                </option>
            </Form.Select>
            <Button variant='contained' sx={{ ml: 1, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, mt: 0, bgcolor: "secondary.main", height: "35px", px: 3 }}>Search</Button>
        </ButtonGroup >
    )
}

export default SearchBarLg