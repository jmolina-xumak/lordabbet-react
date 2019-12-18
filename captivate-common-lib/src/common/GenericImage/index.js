import React from 'react';
import * as PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';

import theme from '../../public/assets/theme';
import useStyles from './styles';

/**
 * @visibleName Image
 */
const GenericImage = (props) => {
    const {data} = props;
    const {imageUrl, objectFitType} = data || {};
    const altText = data.altText || 'Generic Image';
    const classes = useStyles();
    let imageClass = '';
    if ('objectFit' in document.documentElement.style === false) {
        imageClass = classes.image;
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                className={classes.container}
                data-test="genericImage-container"
            >
                {!!imageUrl && (
                    <Grid
                        item xs={12}
                        role="img"
                        aria-label="Generic Image"
                    >
                        <img
                            src={imageUrl}
                            alt={altText}
                            style={{objectFit: objectFitType}}
                            className={imageClass}
                        />
                    </Grid>
                )}
            </Grid>
        </ThemeProvider>
    );
};

GenericImage.propTypes = {
    /** image url */
    imageUrl: PropTypes.string,
    /** object fit type */
    objectFit: PropTypes.string,
    /** Alternate text for image */
    altText: PropTypes.string,
};

GenericImage.defaultProps = {};
export default GenericImage;
