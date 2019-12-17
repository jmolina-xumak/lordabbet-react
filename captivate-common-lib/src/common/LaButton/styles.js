import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    outlined: {
        'color': '#0a855b',
        'border': '1px solid #0a855b',
        'fontFamily': 'DinProMedium',
        'fontSize': 16,
        'fontWeight': 500,
        'letterSpacing': 0.6,
        '&:hover': {
            'borderColor': '#06563b',
            'backgroundColor': '#FFF',
            'cursor': 'pointer',
        },
        '&:focus': {
            'border: ': 'solid 2px rgba(10, 133, 91, 0.4)',
        },
    },
    outlinedSmall: {
        fontSize: 12,
    },
    link: {
        'fontFamily': 'Arial',
        'fontSize': 14,
        'fontWeight': 'bold',
        'lineHeight': 1.86,
        'color': '#0a855b',
        'padding': 0,
        '&:hover': {
            'backgroundColor': '#FFF',
            'cursor': 'pointer',
            'textDecoration': 'underline',
        },
    },
    linkSmall: {
        fontSize: 12,
    },
    contained: {
        'border': '1px solid #0a855b',
        'backgroundColor': '#0a855b',
        'opacity': 0.8,
        '& span': {
            'fontFamily': 'DinProMedium',
            'fontSize': 16,
            'fontWeight': 500,
            'letterSpacing': 0.6,
            'color': '#ffffff',
        },
        '&:hover': {
            'backgroundColor': '#06563b',
            'cursor': 'pointer',

        },
        '&:focus': {
            'border: ': 'solid 2px rgba(10, 133, 91, 0.4)',
        },
    },
    containedSmall: {
        '& span': {
            'fontSize': 12,
        },
    },
    label: {
        marginTop: 2,
    },
    labelSmall: {
        marginTop: 4,
    },
});

export default useStyles;
