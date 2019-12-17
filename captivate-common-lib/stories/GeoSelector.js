import React from 'react';
import {storiesOf} from '@storybook/react';
import {Grid} from '@material-ui/core';

// Addons
import {withA11y} from '@storybook/addon-a11y';

import {GeoSelector} from '../src';

storiesOf('GeoSelector', module)
    .addDecorator(withA11y)
    .addParameters({jest: ['GeoSelector']})
    .add('GeoSelector', () => (
        <Grid container style={{padding: 16}}>
            <Grid item xs={12}>
                <GeoSelector />
            </Grid>
        </Grid>
    ));
