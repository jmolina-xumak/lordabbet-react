import React from 'react';
import * as PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';

import theme from '../../public/assets/theme';
import {mobileView, ErrorHandler, WarningHandler} from '../../common';

import useStyles from './styles';

const Text = (props) => {
    const {data, error, warning} = props;
    const {text, date, timeToRead, description, categoryUrl} = data || {};
    const classes = useStyles();
    const isMobile = mobileView();

    const categoryClick = (url) => {
        if (!!url) {
            window.location.assign(window.location.origin + url);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            {error && error.message !== undefined && <ErrorHandler {...error}/>}
            {warning && warning.warningMessage !== undefined && <WarningHandler {...warning}/>}
            {data !== undefined && (
                <Grid
                    container
                    className={classes.container}
                    data-test="text-container"
                >

                    {!!text && (
                        <Grid
                            item
                            xl={12}
                            className={`${classes.description} ${!!isMobile &&
                                classes.mobileText}`}
                            data-testid="articleText"
                        >
                            {text}
                        </Grid>
                    )}


                </Grid>
            )}
        </ThemeProvider>
    );
};
Text.propTypes = {
    text: PropTypes.string,
};

Text.defaultProps = {};

export default Text;
