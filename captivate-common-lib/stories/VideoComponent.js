import React from 'react';
import {storiesOf} from '@storybook/react';
import {Grid} from '@material-ui/core';

// Addons
import {withA11y} from '@storybook/addon-a11y';

import {VideoComponent} from '../src';
import {videoData, onlyVideoData} from '../public/data/videoJSON';

storiesOf('Video Component', module)
    .addDecorator(withA11y)
    .addParameters({jest: ['ArticleHeader']})
    .add('Video promotional component', () => (
        <Grid container style={{padding: 16}} justify="center">
            <Grid item xs={12} sm={8} md={6} lg={4} xl={4}>
                <VideoComponent {...videoData}/>
            </Grid>
        </Grid>
    ))
    .add('Video component', () => (
        <Grid container style={{padding: 16}} justify="center">
            <Grid item xs={12} sm={8} md={6} lg={4} xl={4}>
                <VideoComponent {...onlyVideoData}/>
            </Grid>
        </Grid>
    ));
