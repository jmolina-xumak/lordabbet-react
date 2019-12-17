import React from 'react';
import * as PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import {IMG} from '../../common';
import { PopupContainer } from '../../common';
import useStyles from './styles';

const ImageComponent = (props) => {
    const { data } = props;
    const { imageUrl, objectFitType, title, description, disclosure } = data || {};
    const altText = data.altText || 'Generic Image';
    const classes = useStyles();

    return (
        <div>
            {((title === undefined) && (description === undefined) && (disclosure === undefined)) ?
                <IMG {...props} /> :
                <PopupContainer>
                    {!!title && (
                        <Grid
                            item
                            xl={12}
                            className={classes.title}
                        >
                            {title}
                        </Grid>
                    )}
                    {!!description && (
                        <Grid
                            item
                            xl={12}
                            className={classes.description}
                        >
                            {description}
                        </Grid>
                    )}
                    <IMG {...props} />
                    {!!disclosure && (
                        <Grid
                            item
                            xl={12}
                            className={classes.disclosure}
                        >
                            {disclosure}
                        </Grid>
                    )}
                </PopupContainer>
            }
        </div>
    );
};

export default ImageComponent;