import React from "react";
import { 
    AppBar, 
    Button, 
    InputBase,
    Typography,
    Toolbar } from "@material-ui/core";
    import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexGrow: 1,
    },
    toolbar: {
        backgroundColor: '#80cbc4',
    },
    title: {
        width: "100%",
        color: "black",
        margin: theme.spacing(2),
    },
    search: {
        borderRadius: theme.shape.borderRadius,
        paddingLeft: '5px',
        textAlign: 'left',
        margin: theme.spacing(2),
        width: '50%',
        backgroundColor: '#b2dfdb',
    },
    sideButton: {
        width: '100px',
        backgroundColor: '#80cbc4',
        fontWeight: 'bold',
        margin: theme.spacing(2),
    },
    logo: {
        fontWeight: "bold",
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar className={classes.toolbar}>
                    <Link 
                      underline="none"
                      to="/"
                      color="inherit">
                        <Button >
                            <Typography className={classes.logo} variant="h4">
                                AdamsOfferUp
                            </Typography>
                        </Button>
                    </Link>
                    <div className={classes.search}>
                        <InputBase placeholder="Search..." fullWidth="true"/>
                    </div>
                    <Link to="/helppage">
                        <Button className={classes.sideButton}>
                            How it Works
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button className={classes.sideButton}>
                            Log In
                        </Button>
                    </Link>
                    <Link to="/signup">
                        <Button className={classes.sideButton}>
                            Sign Up
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}