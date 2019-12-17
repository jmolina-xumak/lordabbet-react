import React from 'react';
import {Grid} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import {ThemeProvider} from '@material-ui/styles';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PlayArrowSharpIcon from '@material-ui/icons/PlayArrowSharp';
import TwitterIcon from '@material-ui/icons/Twitter';
import CollectionsBookmarkSharpIcon from '@material-ui/icons/CollectionsBookmarkSharp';
import SchoolSharpIcon from '@material-ui/icons/SchoolSharp';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';

import theme from '../../../public/assets/theme';
import Promotion from './Promotion';
import useStyles from './styles';
import {ErrorHandler, WarningHandler} from '../../common';

const PromotionalBlock = (props) => {
    const {data, error, warning} = props;
    const {promotionType, iconAvailable} = data || {};
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            {error && error.message !== undefined && <ErrorHandler {...error}/>}
            {warning && warning.warningMessage !== undefined && <WarningHandler {...warning}/>}
            {data !== undefined && (
                <Grid
                    container
                    className={classes.container}
                    data-testid="promotionalBlockContainer"
                >
                    {promotionType === 'webinar' && (
                        <Promotion
                            Logo={!!iconAvailable && OndemandVideoIcon}
                            outlinedButton
                            ButtonIcon={PlayArrowSharpIcon}
                            iconcolor="#0a855b"
                            {...data}
                        />
                    )}
                    {promotionType === 'socialTwitter' && (
                        <Promotion Logo={!!iconAvailable && TwitterIcon} link {...data} />
                    )}
                    {promotionType === 'findRep' && (
                        <Promotion Logo={!!iconAvailable && SchoolSharpIcon} outlinedButton {...data} />
                    )}
                    {promotionType === 'newsLetter' && (
                        <Promotion Logo={!!iconAvailable && EmailSharpIcon} textFieldRequired {...data} />
                    )}
                    {promotionType === 'specialCollection' && (
                        <Promotion Logo={!!iconAvailable && CollectionsBookmarkSharpIcon} outlinedButton {...data} />
                    )}
                </Grid>
            )}
        </ThemeProvider>
    );
};
PromotionalBlock.propTypes = {
    /** image url */
    imageUrl: PropTypes.string,
    /** header title */
    title: PropTypes.string,
    /** description */
    description: PropTypes.string,
    /** CTA text */
    buttonLabel: PropTypes.string,
    /** CTA url */
    buttonUrl: PropTypes.string,
    /** icon type */
    promotionType: PropTypes.string,
};
PromotionalBlock.defaultProps = {};
export default PromotionalBlock;
