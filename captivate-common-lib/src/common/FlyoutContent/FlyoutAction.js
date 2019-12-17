import React from 'react';

import {Grid} from '@material-ui/core';
import useStyles from './FlyoutAction.styles';
import {BUTTON} from '../../common';

const renderCta = (cta, classes) => {
    const calls = [];
    if (cta.length > 0) {
        calls.push(<Grid item xs={12} className={classes.positive} id={'positive'} data-testid={'positive'}>
            <BUTTON
                style={{width: '100%'}}
                label={cta[0].label}
                onClick={() => !!cta[0].callback && cta[0].callback()}
                onKeyPress={() => !!cta[0].callback && cta[0].callback()}
            />
        </Grid>);
    }
    for (let i = 1; i < cta.length; i++) {
        calls.push(<Grid item xs={12} className={classes.negative} id={`negative-${i}`} data-testid={`negative-${i}`}>
            <BUTTON
                style={{width: '100%'}}
                label={cta[i].label}
                isoutlined={cta[i].type==='outlined' ? true : undefined}
            />
        </Grid>);
    }
    return calls;
};

const renderTitle = (title, classes) => {
    return (!!title &&
        <Grid item xs={12} className={classes.title} data-testid={'title'}>
            {title}
        </Grid>
    );
};

const renderDescription = (description, classes) => {
    return (!!description &&
        <Grid item xs={12} className={classes.description} data-testid={'description'}>
            {description}
        </Grid>);
};

export const FlyoutAction = (props) => {
    const {title, description, cta} = props;
    const classes = useStyles();
    return (
        <>
            {renderTitle(title, classes)}
            {renderDescription(description, classes)}
            {renderCta(cta, classes)}
        </>
    );
};

export default FlyoutAction;
