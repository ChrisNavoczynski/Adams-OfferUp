import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Paper,
  makeStyles,
  TextField,
  Button,
  MenuItem,
  Typography,
} from '@material-ui/core';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import axios from 'axios';
import FileUploader from '../UploadUtilities/FileUploader';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    width: '50%',
    margin: theme.spacing(2),
    backgroundColor: '#FAF6F5',
  },
  title: {
    margin: theme.spacing(1),
  },
  labels: {
    textDecoration: 'none',
    color: 'black',
    display: 'block',
    marginBlock: theme.spacing(2),
  },
}));

const defaultFormValues = {
  itemName: '',
  categoryType: '',
  price: '',
  description: '',
  seller: '',
  location: '',
};

export default function ProductUser() {
  const classes = useStyles();
  const [formValues, setFormValues] = useState([defaultFormValues]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const renderError = () => <p>{`Error: ${error}`}</p>;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestConfig = {
      url: 'http://localhost:8000/api/v1/products',
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: {
        itemName: formValues.itemName,
        categoryType: formValues.categoryType,
        price: formValues.price,
        description: formValues.description,
        seller: formValues.seller,
        location: formValues.location,
      },
    };

    axios(requestConfig)
      .then(() => {
        setSuccess(true);
      })
      .catch((err) => {
        setError(err);
      });
  };

  if (success) {
    return <Redirect to="/" />;
  }
  if (error) {
    return renderError();
  }

  return (
    <Paper
      className={classes.paper}
      elevation={5}
    >
      <Typography className={classes.title} variant="h3">
        Item to Sell Information
      </Typography>
      <form onSubmit={handleSubmit} id="createProduct">
        <TextField
          className={classes.labels}
          fullWidth
          id="standard-multiline-static"
          label="Item Name: "
          variant="outlined"
          placeholder="Item Name: "
          defaultValue={formValues.itemName}
          onChange={handleInputChange}
          name="itemName"
          rows={1}
        />
        <TextField
          className={classes.labels}
          fullWidth
          id="select"
          label="Category: "
          variant="outlined"
          placeholder="Select a Category"
          defaultValue="Select a Category"
          onChange={handleInputChange}
          name="categoryType"
          value={setFormValues.value}
          select
          rows={1}
        >
          <MenuItem value="Select a Category">Select a Category</MenuItem>
          <MenuItem value="Antiques">Antiques</MenuItem>
          <MenuItem value="Appliances">Appliances</MenuItem>
          <MenuItem value="Automotive">Automotive</MenuItem>
          <MenuItem value="Beauty and Health">Beauty and Health</MenuItem>
          <MenuItem value="Bicycles">Bicycles</MenuItem>
          <MenuItem value="Boats and Marine">Boats and Marine</MenuItem>
          <MenuItem value="Books">Books</MenuItem>
          <MenuItem value="CDs and DVDs">CDs and DVDs</MenuItem>
          <MenuItem value="Cellphones">Cellphones</MenuItem>
          <MenuItem value="Clothing">Clothing</MenuItem>
          <MenuItem value="Collectibles">Collectibles</MenuItem>
          <MenuItem value="Computer Equipment">Computer Equipment</MenuItem>
          <MenuItem value="Electronics">Electronics</MenuItem>
          <MenuItem value="Fitness">Fitness</MenuItem>
          <MenuItem value="Furniture">Furniture</MenuItem>
          <MenuItem value="Home and Garden">Home and Garden</MenuItem>
          <MenuItem value="Infant and Toddler">Infant and Toddler</MenuItem>
          <MenuItem value="Jewerly">Jewerly</MenuItem>
          <MenuItem value="Musical Instruments">Musical Instruments</MenuItem>
          <MenuItem value="Pet Supplies">Pet Supplies</MenuItem>
          <MenuItem value="Software">Software</MenuItem>
          <MenuItem value="Sports">Sports</MenuItem>
          <MenuItem value="Tools">Tools</MenuItem>
          <MenuItem value="Toys and Games">Toys and Games</MenuItem>
          <MenuItem value="Video Games">Video Games</MenuItem>
        </TextField>
        <CurrencyTextField
          className={classes.labels}
          fullWidth
          id="standard-multiline-static"
          label="Price: "
          variant="outlined"
          placeholder="Price: "
          currencySymbol="$"
          decimalCharacter="."
          digitGroupSeperator=","
          defaultValue={formValues.price}
          onChange={(handleInputChange)}
          name="price"
          rows={1}
        />
        <TextField
          className={classes.labels}
          fullWidth
          id="standard-multiline-static"
          label="Description:"
          variant="outlined"
          placeholder="Description:"
          defaultValue={formValues.seller}
          onChange={handleInputChange}
          name="description"
          multiline
          rows={4}
        />
        <TextField
          className={classes.labels}
          fullWidth
          id="standard-multiline-static"
          label="Seller Name:"
          variant="outlined"
          placeholder="Seller Name:"
          defaultValue={formValues.itemName}
          onChange={handleInputChange}
          name="seller"
          rows={1}
        />
        <TextField
          className={classes.labels}
          fullWidth
          id="standard-multiline-static"
          label="Location:"
          variant="outlined"
          placeholder="Valid Street, City, State, and Zip:"
          defaultValue={formValues.location}
          onChange={handleInputChange}
          name="location"
          multiline
          rows={2}
        />
        <FileUploader />
        <Button type="submit" form="createProduct">Submit Product</Button>
      </form>
    </Paper>
  );
}
