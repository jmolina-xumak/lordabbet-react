import React from 'react';
import {storiesOf} from '@storybook/react';
import {Grid} from '@material-ui/core';

// Addons
import {withA11y} from '@storybook/addon-a11y';

import {PromotionalBlock} from '../src';
import {
    webinarPromotion,
    newsLetterPromotion,
    socialTwitterPromotion,
    specialCollectionPromotion,
    findRepPromotion,
    promotionalData1,
    promotionalData2,
    promotionalData3,
    promotionalData4,
} from '../public/data/promotionalBlockJSON';

storiesOf('Promotional Block', module)
    .addDecorator(withA11y)
    .addParameters({jest: ['PromotionalBlock']})
    .add('With all the content', () => (
        <Grid container style={{padding: 16}}>
            <Grid item xs={12} sm={5} lg={2} xl={1} md={6}>
                <PromotionalBlock {...promotionalData1} />
            </Grid>
        </Grid>
    ))
    .add('No Image', () => (
        <Grid container style={{padding: '32px 16px 16px 16px'}}>
            <Grid item xs={12} sm={5} lg={2} xl={1} md={6}>
                <PromotionalBlock {...promotionalData2} />
            </Grid>
        </Grid>
    ))
    .add('No Description', () => (
        <Grid container style={{padding: '32px 16px 16px 16px'}}>
            <Grid item xs={12} sm={5} lg={2} xl={1} md={6}>
                <PromotionalBlock {...promotionalData3} />
            </Grid>
        </Grid>
    ))
    .add('No Icon', () => (
        <Grid container style={{padding: 16}}>
            <Grid item xs={12} sm={5} lg={2} xl={1} md={6}>
                <PromotionalBlock {...promotionalData4} />
            </Grid>
        </Grid>
    ));

storiesOf('Promotion Permutations', module)
    .addDecorator(withA11y)
    .add('webinarPromotion Block', () => (
        <Grid container style={{padding: 16}}>
            <Grid item xs={12} sm={5} lg={2} xl={1} md={6}>
                <PromotionalBlock {...webinarPromotion} />
            </Grid>
        </Grid>
    ))
    .add('newsLetterPromotion', () => (
        <Grid container style={{padding: 16}}>
            <Grid item xs={12} sm={5} lg={2} xl={1} md={6}>
                <PromotionalBlock {...newsLetterPromotion} />
            </Grid>
        </Grid>
    ))
    .add('socialTwitterPromotion', () => (
        <Grid container style={{padding: 16}}>
            <Grid item xs={12} sm={5} lg={2} xl={1} md={6}>
                <PromotionalBlock {...socialTwitterPromotion} />
            </Grid>
        </Grid>
    ))
    .add('specialCollectionPromotion', () => (
        <Grid container style={{padding: 16}}>
            <Grid item xs={12} sm={5} lg={2} xl={1} md={6}>
                <PromotionalBlock {...specialCollectionPromotion} />
            </Grid>
        </Grid>
    ))
    .add('findRepPromotion', () => (
        <Grid container style={{padding: 16}}>
            <Grid item xs={12} sm={5} lg={2} xl={1} md={6}>
                <PromotionalBlock {...findRepPromotion} />
            </Grid>
        </Grid>
    ));
