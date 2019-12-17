import React from 'react';
import {storiesOf} from '@storybook/react';
import {Grid} from '@material-ui/core';

// Addons
import {withA11y} from '@storybook/addon-a11y';

import {ArticleHeader} from '../src';
import {
    articleHeader,
    articleHeaderTimeReadEmpty,
    articleHeaderDescriptionEmpty,
} from '../public/data/articleHeaderJSON';

storiesOf('Article Header', module)
    .addDecorator(withA11y)
    .addParameters({jest: ['ArticleHeader']})
    .add('Article Header', () => (
        <Grid container style={{padding: 16}}>
            <Grid item xs={12} lg={5} xl={6} md={6}>
                <ArticleHeader {...articleHeader} />
            </Grid>
        </Grid>
    ))
    .add('Article Header Time to Read Empty', () => (
        <Grid container style={{padding: 16}}>
            <Grid item xs={12} lg={5} xl={6} md={6}>
                <ArticleHeader {...articleHeaderTimeReadEmpty} />
            </Grid>
        </Grid>
    ))
    .add('Articke Header Description Empty', () => (
        <Grid container style={{padding: 16}}>
            <Grid item xs={12} lg={5} xl={6} md={6}>
                <ArticleHeader {...articleHeaderDescriptionEmpty} />
            </Grid>
        </Grid>
    ))
    .add('No Data', () => (
        <Grid container style={{padding: 16}}>
            <Grid item xs={12} lg={5} xl={6} md={6}>
                <ArticleHeader {...articleHeaderEmpty} />
            </Grid>
        </Grid>
    ));
