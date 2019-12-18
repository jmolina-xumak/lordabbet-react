import React from 'react';
import {Grid} from '@material-ui/core';
import * as PropTypes from 'prop-types';

import useStyles from './Styles';
import theme from '../../public/assets/theme';
import {BUTTON, Separator} from '..';


export const H1 = (props) => {
    const classes = useStyles(theme);
    return (
        <h1 className={`${classes.header} ${classes.header1}`}>{props.children}</h1>
    );
};

export const H2 = (props) => {
    const classes = useStyles(theme);
    return (
        <h2 className={`${classes.header} ${classes.header2}`}>{props.children}</h2>
    );
};

export const H3 = (props) => {
    const classes = useStyles(theme);
    return (
        <h3 className={`${classes.header} ${classes.header3}`}>{props.children}</h3>
    );
};

export const H4 = (props) => {
    const classes = useStyles(theme);
    return (
        <h4 className={`${classes.header} ${classes.header4}`}>{props.children}</h4>
    );
};

export const H5 = (props) => {
    const classes = useStyles(theme);
    return (
        <h5 className={`${classes.header} ${classes.header5}`}>{props.children}</h5>
    );
};

export const H6 = (props) => {
    const classes = useStyles(theme);
    return (
        <h6 className={`${classes.header} ${classes.header6}`}>{props.children}</h6>
    );
};

export const P1 = (props) => {
    const classes = useStyles(theme);
    return (
        <h6 className={`${classes.paragraph} ${classes.paragraph1}`}>{props.children}</h6>
    );
};

export const P2 = (props) => {
    const classes = useStyles(theme);
    return (
        <h6 className={`${classes.paragraph} ${classes.paragraph2}`}>{props.children}</h6>
    );
};

export const OL = (props) => {
    const classes = useStyles(theme);
    return (
        <ol className={classes.orderedList}>{props.children}</ol>
    );
};

export const UL = (props) => {
    const classes = useStyles(theme);
    return (
        <ul className={classes.unOrderedList}>{props.children}</ul>
    );
};

export const PQ = (props) => {
    const classes = useStyles(theme);
    return (
        <div className={classes.pullQuote}>{props.children}</div>
    );
};

export const TIP = (props) => {
    const classes = useStyles(theme);
    const {title, description, category, showSeparator, linkUrl} = props;

    return (
        <Grid container className={classes.container}>
            {showSeparator && <Grid item xs={12}>
                <Separator data= {{
                    type: 'heavy',
                    color: '#a19167',
                }}/>
            </Grid>}
            <Grid item xs={12} className={classes.category}>
                {`${category}:`}
            </Grid>
            <Grid item xs={12} className={classes.title}>
                {title}
            </Grid>
            <Grid item xs={12} className={classes.description}>
                {description}
            </Grid>
            {!!linkUrl &&
                <Grid item xs={12} className={classes.description}>
                    <BUTTON islink label="Read More" size="small" onClick={() => window.location = window.location.origin + '/' + profileUrl}/>
                </Grid>
            }
        </Grid>
    );
};

TIP.props = {
    category: PropTypes.string,
};

TIP.defaultProps = {
    category: 'tip',
};
