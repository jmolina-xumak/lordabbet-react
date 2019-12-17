import React from 'react';
import {storiesOf} from '@storybook/react';
import {Grid} from '@material-ui/core';

// Addons
import {withA11y} from '@storybook/addon-a11y';

import {Authors} from '../src';
import {
    singleAuthorsData,
    multipleAuthorsData,
    singleAuthorsBlockData,
    multipleAuthorsBlockData,
    authorsDataEmpty,
} from '../public/data/authorsJSON';

storiesOf('Authors', module)
    .addDecorator(withA11y)
    .addParameters({jest: ['Authors']})
    .add('Single author in the header', () => (
        <Grid container style={{padding: 16}}>
            <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
                <Authors {...singleAuthorsData} />
            </Grid>
        </Grid>
    ))
    .add('Multiple authors in header', () => (
        <Grid container style={{padding: 16}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={5}
                xl={5}
                style={{marginTop: 120}}
            >
                <Authors {...multipleAuthorsData} />
            </Grid>
        </Grid>
    ))
    .add('Single author block', () => (
        <Grid container style={{padding: 16}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={5}
                xl={5}
                style={{marginTop: 40}}
            >
                <Authors {...singleAuthorsBlockData} />
            </Grid>
        </Grid>
    ))
    .add('Multiple authors block', () => (
        <Grid container style={{padding: 16}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={5}
                xl={5}
                style={{marginTop: 40}}
            >
                <Authors {...multipleAuthorsBlockData} />
            </Grid>
        </Grid>
    ))
    .add('No Data', () => (
        <Grid container>
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={5}
                xl={5}
                style={{marginTop: 40}}
            >
                <Authors {...authorsDataEmpty} />
            </Grid>
        </Grid>
    ));
