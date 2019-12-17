import React from 'react';
import {Grid} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {BUTTON} from '../../common';

import useStyles from './styles';

const Promotion = (props) => {
    const {
        imageUrl,
        title,
        description,
        buttonLabel,
        Logo,
        outlinedButton,
        link,
        ButtonIcon,
        textFieldRequired,
        header,
        iconcolor,
    } = props || {};
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <Grid container>
                {!!imageUrl && (
                    <Grid item xs={12} className={classes.imageContainer}>
                        <img src={imageUrl} alt="" className={classes.image} data-testid="promotionalBlockImage"/>
                    </Grid>
                )}
                <Grid item xs={12}>
                    <Grid container className={classes.dataContainer}>
                        {!!Logo &&
                            <div className={classes.icon}>
                                <Logo
                                    htmlColor="#ffffff"
                                    className={classes.iconImage}
                                />
                            </div>
                        }
                        {!!header &&
                            <Grid item xs={12} className={classes.header} data-testid="promotionalBlockHeader">{header}</Grid>
                        }
                        {!!title && (
                            <Grid item xs={12} className={classes.title} data-testid="promotionalBlockTitle">
                                {title}
                            </Grid>
                        )}
                        {!!description && (
                            <Grid item xs={12} className={classes.description} data-testid="promotionalBlockDescription">
                                {description}
                            </Grid>
                        )}
                        {!!textFieldRequired && (
                            <Grid item xs={12}>
                                <label htmlFor="email" className={classes.visuallyHidden}>
                                    Email:
                                </label>
                                <TextField
                                    type="text"
                                    name="email"
                                    id="email"
                                    className={classes.textField}
                                    placeholder="Enter E-Mail Address"
                                    variant="outlined"
                                />
                            </Grid>
                        )}
                        {!!buttonLabel && (
                            <Grid item xs={12}>
                                <BUTTON isoutlined={outlinedButton} islink={link} label={buttonLabel} Icon={ButtonIcon} iconcolor={iconcolor} data-testid="promotionalBlockbutton"/>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Promotion;
