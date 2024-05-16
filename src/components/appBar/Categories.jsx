import React from 'react'
import { Menu, MenuItem } from '@mui/material'


function Categories({anchorEl,open2,handleClose,selectedIndex,handleMenuItemClick}) {
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
    <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open2}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
        sx={{top:0,width:"300px"}}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) =>{handleClose; handleMenuItemClick(event, index)}}
            sx={{width:"220px"}}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
  )
}

export default Categories