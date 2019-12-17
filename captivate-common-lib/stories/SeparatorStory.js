import React from 'react';
import {storiesOf} from '@storybook/react';
import {Grid} from '@material-ui/core';

// Addons
import {withA11y} from '@storybook/addon-a11y';

import {Separator} from '../src/common';
import {
    separatorData,
    separatorDataGold,
    separatorDataGrey,
    separatorEmptyData,
} from '../public/data/separatorJSON';

storiesOf('Separator', module)
    .addDecorator(withA11y)
    .add('Separator Heavy with black color', () => (
        <Grid container justify="center" style={{marginTop: 30}}>
            <Grid item xs={6}>
                <Separator {...separatorData} />
            </Grid>
        </Grid>
    ))
    .add('Separator Heavy with gold color', () => (
        <Grid container justify="center" style={{marginTop: 30}}>
            <Grid item xs={6}>
                <Separator {...separatorDataGold} />
            </Grid>
        </Grid>
    ))
    .add('Separator Light with grey color', () => (
        <Grid container justify="center" style={{marginTop: 30}}>
            <Grid item xs={6}>
                <Separator {...separatorDataGrey} />
            </Grid>
        </Grid>
    ))
    .add('Separator without data', () => (
        <Grid container justify="center" style={{marginTop: 30}}>
            <Grid item xs={6}>
                <Separator {...separatorEmptyData} />
            </Grid>
        </Grid>
    ));
