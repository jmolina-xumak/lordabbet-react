import React from 'react';
import {storiesOf} from '@storybook/react';

import {recommandedData} from '../public/data/recommandedForYouJSON';

// Addons
import {withA11y} from '@storybook/addon-a11y';

import {RecommendedForYou} from '../src';

storiesOf('RecommendedForYou', module)
    .addDecorator(withA11y)
    .addParameters({jest: ['RecommendedForYou']})
    .add('RecommendedForYou idio driven', () => (
        <RecommendedForYou />
    ))
    .add('RecommendedForYou data driven', () => (
        <RecommendedForYou {...recommandedData}/>
    ));
