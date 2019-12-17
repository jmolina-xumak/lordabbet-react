import React from 'react';
import {storiesOf} from '@storybook/react';
import {Grid} from '@material-ui/core';

// Addons
import {withA11y} from '@storybook/addon-a11y';

import { ImageComponent } from '../src';

import {
    genericImageData,
    genericImageDataContain,
    genericImageDataCover,
    genericImageDataNone,
    genericImageDataEmptyImage,
    genericImageDataEmpty,
} from '../public/data/genericImageJSON';

storiesOf('Image Component', module)
    .addDecorator(withA11y)
    .add('Image with title, description, disclosure', () => (
        <Grid container style={{ padding: 16 }}>
            <Grid item xs={12}>
                <ImageComponent {...genericImageData} />
            </Grid>
        </Grid>
    ));
