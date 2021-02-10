import React from "react";
import { 
    AppBar, 
    Button, 
    InputBase,
    Typography,
    Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//import Logo from "../Logo/Logo";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',
        flexGrow: 1
    },
    toolbar: {
        backgroundColor: '#80cbc4',
        textDecoration: 'none'
    },
    link: {
        textDecoration: 'none',
        color: 'black',
    },
    title: {
        margin: theme.spacing(2),
        width: '30%',
        fontWeight: 'bold',
        paddingLeft: '5px',
        textAlign: 'left',
    },
    search: {
        borderRadius: theme.shape.borderRadius,
        paddingLeft: '5px',
        textAlign: 'left',
        margin: theme.spacing(2),
        width: '30%',
        backgroundColor: '#b2dfdb',
    },
    sideButton: {
        width: '100px',
        backgroundColor: '#80cbc4',
        fontWeight: 'bold',
        margin: theme.spacing(2),
    },

}));

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar className={classes.toolbar}>
                    {/** <Logo></Logo> */}
                    {/** placeholder for Logo */}
                    <Typography className={classes.title} variant="h3">
                        <a className={classes.link} href="/home">
                        OfferUpClone
                        </a>
                    </Typography>
                    <div className={classes.search}>
                        <InputBase placeholder="Search..." />
                    </div>
                    <a className={classes.link} href="/helppage">
                        <Button className={classes.sideButton}>
                            How it Works
                        </Button>
                    </a>
                    <a className={classes.link} href="/login">
                        <Button className={classes.sideButton}>
                            Log In
                        </Button>
                    </a>
                    <a className={classes.link} href="/signup">
                        <Button className={classes.sideButton}>
                            Sign Up
                        </Button>
                    </a>
                </Toolbar>
            </AppBar>
        </div>
    )
}