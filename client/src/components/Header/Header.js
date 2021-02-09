import React from "react";
import { 
    AppBar, 
    Button, 
    InputBase, 
    Toolbar, 
    Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',
        flexGrow: 1
    },
    toolbar: {
        backgroundColor: 'yellow',
    },
    title: {
        backgroundColor: 'lightblue',
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
        backgroundColor: 'lightpink',
    },
    sideButton: {
        width: '10%',
        backgroundColor: 'white',
        margin: theme.spacing(2),
    },

}));

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar className={classes.toolbar}>
                    {/** placeholder for Logo */}
                    <Typography className={classes.title} variant="h3">
                        OfferUpClone
                    </Typography>
                    <div className={classes.search}>
                        <InputBase placeholder="Search..." />
                    </div>
                    <Button className={classes.sideButton}>How it Works</Button>
                    <Button className={classes.sideButton}>Log In</Button>
                    <Button className={classes.sideButton}>Sign Up</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}