import React from 'react';
import {storiesOf} from '@storybook/react';

// Addons
import {withA11y} from '@storybook/addon-a11y';

import {RoleSelector} from '../src';
import {
    roleSelection,
    roleSelectionEmpty,
} from '../public/data/roleSelectionJSON';

storiesOf('Role Selector', module)
    .addDecorator(withA11y)
    .addParameters({jest: ['RoleSelector', 'GeoSelector']})
    .add('Role Selector', () => <RoleSelector {...roleSelection} />)
    .add('No Data', () => <RoleSelector {...roleSelectionEmpty} />);
