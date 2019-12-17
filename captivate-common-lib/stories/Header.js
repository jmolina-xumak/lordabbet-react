import React from 'react';
import {storiesOf} from '@storybook/react';
import {Grid} from '@material-ui/core';

// Addons
import {withA11y} from '@storybook/addon-a11y';

import {ArticleHeader, ShareUtility, Authors} from '../src';
import {
    articleHeader,
} from '../public/data/articleHeaderJSON';
import {singleAuthorsData, multipleAuthorsData} from '../public/data/authorsJSON';
import {shareUtilityData} from '../public/data/shareUtilityJSON';

storiesOf('Header', module)
    .addDecorator(withA11y)
    .add('Article Header combined single Author', () => (
        <Grid container style={{padding: 8}}>
            <Grid item xs={12} lg={8} sm={10} md={8} xl={8} md={10}>
                <ArticleHeader {...articleHeader} />
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={12} md={8} sm={8} lg={8} xl={8}>
                        <Authors {...singleAuthorsData} />
                    </Grid>
                    <Grid item xs={12} md={4} sm={4} lg={4} xl={4}>
                        <ShareUtility {...shareUtilityData} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    ))
    .add('Article Header combined multiple Author', () => (
        <Grid container style={{padding: 8}}>
            <Grid item xs={12} lg={8} sm={10} md={8} xl={8} md={10}>
                <ArticleHeader {...articleHeader} />
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={12} md={8} sm={8} lg={8} xl={8}>
                        <Authors {...multipleAuthorsData} />
                    </Grid>
                    <Grid item xs={12} md={4} sm={4} lg={4} xl={4}>
                        <ShareUtility {...shareUtilityData} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    ));
