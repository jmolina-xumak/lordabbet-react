import React from 'react';
import {storiesOf} from '@storybook/react';
import {Grid} from '@material-ui/core';
import PlayArrowSharpIcon from '@material-ui/icons/PlayArrowSharp';

// Addons
import {withA11y} from '@storybook/addon-a11y';

import {BUTTON} from '../src/common';

storiesOf('Buttons', module)
    .addDecorator(withA11y)
    .add('Large Buttons', () => (
        <Grid container style={{padding: 16, marginTop: 60}}>
            <Grid item xs={12} lg={2} xl={2} md={4} sm={4}>
                <div style={{margin: '12px 0', fontWeight: 'bold'}}>Primary Button Large</div>
                <BUTTON label="SUBMIT" />
            </Grid>
            <Grid item xs={12} lg={2} xl={2} md={4} sm={4}>
                <div style={{margin: '12px 0', fontWeight: 'bold'}}>Outline Button Large</div>
                <BUTTON label="SUBMIT" isoutlined />
            </Grid>
            <Grid item xs={12} lg={2} xl={2} md={4} sm={4}>
                <div style={{margin: '12px 0', fontWeight: 'bold'}}>Text Button Large</div>
                <BUTTON label="Read More" islink />
            </Grid>
            <Grid item xs={12}>
                <div style={{marginTop: 30}}/>
            </Grid>
            <Grid item xs={12} lg={2} xl={2} md={4} sm={4}>
                <div style={{margin: '12px 0', fontWeight: 'bold'}}>Primary Button Small</div>
                <BUTTON label="SUBMIT" size="small" />
            </Grid>
            <Grid item xs={12} lg={2} xl={2} md={4} sm={4}>
                <div style={{margin: '12px 0', fontWeight: 'bold'}}>Outline Button Small</div>
                <BUTTON label="SUBMIT" isoutlined size="small" />
            </Grid>
            <Grid item xs={12} lg={2} xl={2} md={4} sm={4}>
                <div style={{margin: '12px 0', fontWeight: 'bold'}}>Text Button Small</div>
                <BUTTON label="Read More" islink size="small" />
            </Grid>
        </Grid>
    ))
    .add('Icon Buttons', () => (
        <Grid container style={{padding: 16, marginTop: 60}}>
            <Grid item xs={12} lg={2} xl={2} md={4} sm={4}>
                <div style={{margin: '12px 0', fontWeight: 'bold'}}>Icon Button Large</div>
                <BUTTON label="SUBMIT" isoutlined Icon={PlayArrowSharpIcon} iconcolor="#0a855b"/>
            </Grid>
            <Grid item xs={12} lg={2} xl={2} md={4} sm={4}>
                <div style={{margin: '12px 0', fontWeight: 'bold'}}>Icon Button Small</div>
                <BUTTON label="SUBMIT" isoutlined Icon={PlayArrowSharpIcon} iconcolor="#0a855b" size="small" />
            </Grid>
        </Grid>
    ));
