import React from 'react';
import {storiesOf} from '@storybook/react';
import {Grid} from '@material-ui/core';

// Addons
import {withA11y} from '@storybook/addon-a11y';

import {CookieDisclaimer} from '../src';
import {cookieDisclaimerJSON} from '../public/data/cookieDisclaimerJSON';

storiesOf('CookieDisclaimer', module)
    .addDecorator(withA11y)
    .addParameters({jest: ['CookieDisclaimer']})
    .add('CookieDisclaimer', () => (
        <Grid container style={{padding: 16}}>
            <CookieDisclaimer {...cookieDisclaimerJSON} />
        </Grid>
    ));
