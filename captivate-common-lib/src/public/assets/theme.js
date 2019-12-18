import {createMuiTheme} from '@material-ui/core/styles';

import smalt from '../styles/colors/smalt.json';
import negative from '../styles/colors/negative.json';
import gold from '../styles/colors/gold.json';
import greyscale from '../styles/colors/greyscale.json';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        primary: gold,
        secondary: green,
        negative,
        smalt,
        greyscale,
        background: {
            default: '#FFF',
        },
    },
    typography: {
        fontFamily: ['DinProRegular', 'sans-serif'],
        fontSize: 14,
        useNextVariants: true,
    },
    type: 'light',
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 800,
            lg: 1280,
            xl: 1920,
        }
    },
});

export default theme;
