import React from 'react';
import {Grid} from '@material-ui/core';

export const ErrorHandler = (props) => {
    const {message, code} = props || {};
    return (
        <Grid container>
            <Grid item xs={2} data-testid='errorCode'>
                {code}
            </Grid>
            <Grid item xs={10} data-testid='errorMessage'>
                {message}
            </Grid>
        </Grid>
    );
};

export const WarningHandler = (props) => {
    const {warningMessage} = props || {};
    return (
        <Grid container>
            <Grid item xs={12} data-testid='warningMessage'>
                {warningMessage}
            </Grid>
        </Grid>
    );
};
