import React from 'react';
import {Grid} from '@material-ui/core';

import useStyles from './styles';

export const Container = (props) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.classes}>
            {props.children}
        </Grid>
    );
};

export const FlyoutContainer = (props) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.flyoutContainer} data-testid="flyoutContainer">
            {props.children}
        </Grid>
    );
};

export const PopupContainer = (props) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.popupContainer}>
            {props.children}
        </Grid>
    );
};

