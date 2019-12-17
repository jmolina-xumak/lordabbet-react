import React from 'react';
import {storiesOf} from '@storybook/react';
import {Grid} from '@material-ui/core';

// Addons
import {withA11y} from '@storybook/addon-a11y';

import {ShareUtility} from '../src';
import {shareUtilityData} from '../public/data/shareUtilityJSON';

storiesOf('ShareUtility', module)
    .addDecorator(withA11y)
    .addParameters({jest: ['ShareUtility']})
    .add('ShareUtility', () => (
        <Grid container style={{padding: 16, marginTop: 120}}>
            <Grid item xs={12} lg={5} xl={6} md={6}>
                <ShareUtility {...shareUtilityData} />
            </Grid>
        </Grid>
    ));
