import React from 'react';
import {storiesOf} from '@storybook/react';
import {Grid} from '@material-ui/core';

// Addons
import {withA11y} from '@storybook/addon-a11y';

import {IMG} from '../src/common';
import {
    genericImageData,
    genericImageDataContain,
    genericImageDataCover,
    genericImageDataNone,
    genericImageDataEmptyImage,
    genericImageDataEmpty,
} from '../public/data/genericImageJSON';

storiesOf('Generic Image', module)
    .addDecorator(withA11y)
    .add('Generic Image with Object Fit Fill', () => (
        <Grid container style={{padding: 16}}>
            <Grid item xs={12}>
                <IMG {...genericImageData} />
            </Grid>
        </Grid>
    ))
    .add('Generic Image with Object Fit Contain', () => (
        <Grid container style={{padding: 16}}>
            <Grid item xs={12}>
                <IMG {...genericImageDataContain} />
            </Grid>
        </Grid>
    ))
    .add('Generic Image with Object Fit Cover', () => (
        <Grid container style={{padding: 16}}>
            <Grid item xs={12}>
                <IMG {...genericImageDataCover} />
            </Grid>
        </Grid>
    ))
    .add('Generic Image with Object Fit None', () => (
        <Grid container style={{padding: 16}}>
            <Grid item xs={12}>
                <IMG {...genericImageDataNone} />
            </Grid>
        </Grid>
    ))
    .add('Generic Image with image url empty', () => (
        <Grid container style={{padding: 16}}>
            <Grid item xs={12}>
                <IMG {...genericImageDataEmptyImage} />
            </Grid>
        </Grid>
    ))
    .add('Generic Image with Empty data', () => (
        <Grid container style={{padding: 16}}>
            <Grid item xs={12}>
                <IMG {...genericImageDataEmpty} />
            </Grid>
        </Grid>
    ));
