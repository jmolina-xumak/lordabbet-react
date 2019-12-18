import React from 'react';
import * as PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';

import theme from '../../public/assets/theme';
import {mobileView, ErrorHandler, WarningHandler} from '../../common';

import useStyles from './styles';

const ArticleHeader = (props) => {
    const {data, error, warning} = props;
    const {category, title, date, timeToRead, description, categoryUrl} = data || {};
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
                    data-test="articleHeader-container"
                >
                    {!!category && (
                        <Grid item sm={12}>
                            <Grid
                                container
                                onClick={() => categoryClick(categoryUrl)}
                                onKeyPress={() => categoryClick(categoryUrl)}
                                data-test="category"
                                role="button"
                                tabIndex={0}
                            >
                                <div
                                    className={classes.category}
                                    data-testid="articleCategory"
                                >
                                    {category}
                                </div>
                            </Grid>
                        </Grid>
                    )}
                    {!!title && (
                        <Grid
                            item
                            xl={12}
                            className={`${classes.title} ${!!isMobile &&
                                classes.mobileTitle}`}
                            data-testid="articleTitle"
                        >
                            {title}
                        </Grid>
                    )}
                    {!!date && (
                        <Grid item xs={12} className={classes.date} data-testid="articleDate">
                            {date}
                            {!!timeToRead && (
                                <>
                                    <span className={classes.dot}></span>
                                    <span data-testid="articleTimeToRead">{timeToRead} min read</span>
                                </>
                            )}
                        </Grid>
                    )}
                    {!!description && (
                        <Grid
                            item
                            xl={12}
                            className={`${classes.description} ${!!isMobile &&
                                classes.mobileDescription}`}
                            data-testid="articleDescription"
                        >
                            {description}
                        </Grid>
                    )}
                </Grid>
            )}
        </ThemeProvider>
    );
};
ArticleHeader.propTypes = {
    /** ArticleHeader category */
    category: PropTypes.string,
    /** ArticleHeader category url */
    categoryUrl: PropTypes.string,
    /** ArticleHeader title */
    title: PropTypes.string,
    /** ArticleHeader date */
    date: PropTypes.string,
    /** ArticleHeader time to read */
    timeToRead: PropTypes.number,
    /** ArticleHeader description */
    description: PropTypes.string,
};

ArticleHeader.defaultProps = {};

export default ArticleHeader;
