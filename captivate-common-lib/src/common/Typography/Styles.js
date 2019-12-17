import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    header: {
        fontFamily: 'DinProMedium',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: -0.5,
        color: '#333333',
        lineHeight: 1.4,
    },
    header1: {
        fontSize: 50,
    },
    header2: {
        fontSize: 38,
    },
    header3: {
        fontSize: 28,
    },
    header4: {
        fontSize: 20,
    },
    header5: {
        fontSize: 16,
    },
    header6: {
        fontSize: 12,
    },
    paragraph: {
        fontFamily: 'Arial',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.75,
        color: '#333333',
    },
    paragraph1: {
        fontSize: 16,
    },
    paragraph2: {
        fontSize: 14,
    },
    orderedList: {
        'listStyle': 'none',
        'paddingLeft': 0,
        'counterReset': 'myCounter',
        '& li': {
            'counterIncrement': 'myCounter',
            'margin': '0 0 30px 40px',
            'position': 'relative',
            'paddingLeft': 12,
            'fontSize': 16,
            'fontFamily': 'Arial',
            'fontWeight': 'normal',
            'fontStretch': 'normal',
            'fontStyle': 'normal',
            'lineHeight': 1.75,
            'color': '#333333',
            '&:before': {
                content: 'counter(myCounter)',
                fontWeight: 500,
                border: '1px solid #84754d',
                borderRadius: 20,
                padding: '8px 15px',
                fontSize: 12,
                color: '#84754d',
                fontFamily: 'DinProMedium',
                position: 'absolute',
                left: -40,
                top: -4,
            },
        },
    },
    unOrderedList: {
        'paddingLeft': 10,
        'listStyle': 'none',
        '& li': {
            'margin': '0 0 30px 40px',
            'position': 'relative',
            'fontSize': 16,
            'fontFamily': 'Arial',
            'fontWeight': 'normal',
            'fontStretch': 'normal',
            'fontStyle': 'normal',
            'lineHeight': 1.75,
            'color': '#333333',
            '&:before': {
                height: 8,
                width: 8,
                backgroundColor: '#84754d',
                // content: '\/200B/',
                content: '""',
                position: 'absolute',
                left: -40,
                top: 10,

            },
        },
    },
    pullQuote: {
        fontFamily: 'Georgia',
        fontWeight: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.6,
        color: '#333333',
        fontSize: 20,
        fontStyle: 'italic',
    },
    container: {
        fontFamily: 'DinProMedium',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.4,
    },
    category: {
        textTransform: 'upperCase',
        color: '#84754d',
        fontWeight: 500,
        marginBottom: 8,
    },
    title: {
        color: '#151515',
        letterSpacing: 0.2,
        marginBottom: 16,
        fontSize: 20,
    },
    description: {
        fontFamily: 'Arial',
        fontSize: 14,
        letterSpacing: 0.14,
        color: '#777777',
        marginBottom: 8,
        lineHeight: 1.7,
    },
});

export default useStyles;
