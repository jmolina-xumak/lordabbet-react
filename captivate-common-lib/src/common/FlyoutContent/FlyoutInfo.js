import React from 'react';
import { FlyoutContainer } from '../../common';

import { Grid } from '@material-ui/core';
import FlagSharpIcon from '@material-ui/icons/FlagSharp';
import useStyles from './FlyoutInfo.styles';

import { BUTTON } from '../../common';

const FlyoutInfo = (data) => {
    const {
        type,
        title,
        description,
        header,
        category,
        date,
        author,
        cta
     } = data || {};
    const classes = useStyles();

    const ctaClick = (url) => {
        if (!!url) {
            window.location.assign(window.location.origin + url);
        }
    };

    return (
        <Grid
            container
            className={classes.container}
            data-testid="flyOutContainer"
        >
            <div className={classes.icon}>
                <FlagSharpIcon
                    htmlColor="#ffffff"
                    className={classes.iconImage}
                />
            </div>
            {!!header && (
                <Grid item xs={12} className={classes.header} data-testid="flyoutHeader">
                    {header}
                </Grid>
            )}
            {!!title && (
                <Grid item xs={12} className={classes.title} data-testid="flyoutTitle">
                    {title}
                </Grid>
            )}
            {!!category && (
                <Grid item xs={12} className={classes.category} data-testid="flyoutCategory">
                    {category}
                    {!!date && (
                        <>
                            <span className={classes.dot}></span>
                            <span data-testid="flyoutDate">{date}</span>
                        </>
                    )}
                </Grid>
            )}
            {!!author && (
                <Grid item xs={12} className={classes.author} data-testid="flyoutAuthor">
                    By {author}
                </Grid>
            )}
            {!!description && (
                <Grid item xs={12} className={classes.description} data-testid="flyoutDescription">
                    {description}
                </Grid>
            )}
            {cta && cta.length > 0 && (
                cta.map((cta, i) => (
                    !!cta &&
                    <Grid
                        item xs={12}
                        data-testid="flyoutLink"
                        onClick={() => ctaClick(cta.url)}
                        onKeyPress={() => ctaClick(cta.url)}
                    >
                        <BUTTON islink={cta.type} label={cta.label} data-testid="flyoutButtonLink" />
                    </Grid>
                ))
            )}
        </Grid>
    )
};

export default FlyoutInfo;