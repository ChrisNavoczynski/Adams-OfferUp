import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Colors from '../../constants/colors';

const ITEM_HEIGHT = 80;
const useStyles = makeStyles((theme) => ({
  categories: {
    fontWeight: 'bold',
    fontSize: 18,
    columnCount: 3,
    '&:hover': {
      backgroundColor: Colors.lightTeal,
    },
  },
}));

export default function CatDropDown(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button className={classes.categories} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Categories
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
          },
        }}
      >
        <MenuItem component={Link} to="/antiques" onClick={handleClose}>Antiques</MenuItem>
        <MenuItem component={Link} to="/appliances" onClick={handleClose}>Appliances</MenuItem>
        <MenuItem component={Link} to="/automotive" onClick={handleClose}>Automotive</MenuItem>
        <MenuItem component={Link} to="/beauty_health" onClick={handleClose}>Beauty and Health</MenuItem>
        <MenuItem component={Link} to="/bicycles" onClick={handleClose}>Bicycles</MenuItem>
        <MenuItem component={Link} to="/boats" onClick={handleClose}>Boats and Marine</MenuItem>
        <MenuItem component={Link} to="/books" onClick={handleClose}>Books</MenuItem>
        <MenuItem component={Link} to="/cds_dvds" onClick={handleClose}>CDs and DVDs</MenuItem>
        <MenuItem component={Link} to="/cellphones" onClick={handleClose}>Cellphones</MenuItem>
        <MenuItem component={Link} to="/clothing" onClick={handleClose}>Clothing</MenuItem>
        <MenuItem component={Link} to="/collectibles" onClick={handleClose}>Collectibles</MenuItem>
        <MenuItem component={Link} to="/computer" onClick={handleClose}>Computer Equipment</MenuItem>
        <MenuItem component={Link} to="/electronics" onClick={handleClose}>Electronics</MenuItem>
        <MenuItem component={Link} to="/fitness" onClick={handleClose}>Fitness</MenuItem>
        <MenuItem component={Link} to="/furniture" onClick={handleClose}>Furniture</MenuItem>
        <MenuItem component={Link} to="/home_garden" onClick={handleClose}>Home and Garden</MenuItem>
        <MenuItem component={Link} to="/infant_toddler" onClick={handleClose}>Infant and Toddler</MenuItem>
        <MenuItem component={Link} to="/jewerly" onClick={handleClose}>Jewerly</MenuItem>
        <MenuItem component={Link} to="/instruments" onClick={handleClose}>Musical Instruments</MenuItem>
        <MenuItem component={Link} to="/pet_supply" onClick={handleClose}>Pet Supplies</MenuItem>
        <MenuItem component={Link} to="/software" onClick={handleClose}>Software</MenuItem>
        <MenuItem component={Link} to="/sports" onClick={handleClose}>Sports</MenuItem>
        <MenuItem component={Link} to="/tools" onClick={handleClose}>Tools</MenuItem>
        <MenuItem component={Link} to="/toys" onClick={handleClose}>Toys and Games</MenuItem>
        <MenuItem component={Link} to="/video_games" onClick={handleClose}>Video Games</MenuItem>
      </Menu>
    </div>
  );
}
