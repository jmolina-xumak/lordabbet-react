import React from 'react';
import {storiesOf} from '@storybook/react';
import {Grid} from '@material-ui/core';

// Addons
import {withA11y} from '@storybook/addon-a11y';

import {Flyout} from '../src';
import {flyoutInfoData, flyoutActionData} from '../public/data/flyoutJSON';

storiesOf('Flyout', module)
    .addDecorator(withA11y)
    .addParameters({jest: ['Flyout', 'FlyoutAction', 'FlyoutInfo']})
    .add('Info Flyout', () => (
        <Grid container style={{padding: 16}}>
            <Flyout {...flyoutInfoData}/>
        </Grid>
    ))
    .add('Action Flyout', () => (
        <Grid container style={{padding: 16}}>
            <Flyout {...flyoutActionData}/>
        </Grid>
    ));
