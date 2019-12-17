import React from 'react';
import * as PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';

import useStyles from './styles';
import theme from '../../../public/assets/theme';
import HeaderAuthors from './HeaderAuthors';
import AuthorBlockView from './AuthorBlockView';
import {ErrorHandler, WarningHandler} from '../../common';

/*
 * RoleSelector Component
 * */
const Authors = (props) => {
    const {data, error, warning} = props;
    const {authors, isAuthorBlock} = data || {};
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            {error && error.message !== undefined && <ErrorHandler {...error}/>}
            {warning && warning.warningMessage !== undefined && <WarningHandler {...warning}/>}
            {data !== undefined && (
                <Grid
                    container
                    className={classes.container}
                    data-test="author-container"
                >
                    {!isAuthorBlock && authors && authors.length > 0 && (
                        <HeaderAuthors
                            authors={authors}
                            count={authors.length}
                            classes={classes}
                        />
                    )}
                    {isAuthorBlock && authors && authors.length > 0 && (
                        <>
                            <div className={classes.authorBlockSeperator} />
                            <AuthorBlockView
                                authors={authors}
                                classes={classes}
                                count={authors.length}
                            />
                        </>
                    )}
                </Grid>
            )}
        </ThemeProvider>
    );
};

Authors.propTypes = {
    /** Value is true when author information is getting displayed as author block */
    isAuthorBlock: PropTypes.bool,
    /** List of authors */
    authors: PropTypes.array,
    /** Author name */
    name: PropTypes.string,
    /** Author designation */
    designation: PropTypes.string,
    /** Author qualification */
    qualification: PropTypes.string,
    /** Author profile url */
    profileUrl: PropTypes.string,
    /** Author image url */
    imageUrl: PropTypes.string,
    /** Author description */
    description: PropTypes.string,
};

Authors.defaultProps = {};

export default Authors;
