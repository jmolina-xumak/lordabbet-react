import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    'container': {
        height: 'auto',
        margin: 8,
        width: '100%',
        padding: '30px 48px',
        border: '1px solid #ccc',
        letterSpacing: 0.72,
        color: '#000',
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        MsTransform: 'translate(-50%, -50%)',
        WebkitTransform: 'translate(-50%, -50%)',
        overflowY: 'auto',
        background: '#FFF',
        maxHeight: '100%',
        zIndex: '100',
    },
    '@media (min-width: 320px) and (max-width : 480px)': {
        container: {
            padding: '24px 16px',
            width: '100%',
            margin: 0,
            position: 'relative',
        },
    },
    '@media only screen and (min-width: 90em)': {
        container: {
            width: '60vw',
        },
    },
    'header': {
        fontFamily: 'DinProRegular',
        marginBottom: 8,
        textTransform: 'none',
        fontSize: 24,
        lineHeight: 1.4,
        letterSpacing: 0.72,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
    },
    'subHeader': {
        marginBottom: 8,
        fontSize: 13,
        fontFamily: 'Georgia, Times New Roman',
        color: '#666',
        fontStyle: 'italic',
    },
    'selectionBox': {
        'padding': 16,
        'border': '1px solid #ccc',
        'cursor': 'pointer',
        'marginBottom': 8,
        '&:hover': {
            'border': '2px solid #045c3e',
            'padding': 15,
            '& .selector': {
                textDecoration: 'underline',
            },
        },
        '& .selector': {
            fontFamily: 'DinPro,sans-serif',
            textTransform: 'capitalize',
            fontSize: 14,
            lineHeight: 1.4,
            cursor: 'pointer',
            color: '#000',
        },
    },
    'selectionBoxMobile': {
        'padding': 0,
        'paddingRight': 16,
        'paddingLeft': 16,
        'border': 'none',
        'marginBottom': 0,
        '&:hover': {
            'border': 'none',
            'padding': 0,
            'paddingRight': 16,
            'paddingLeft': 16,
            '& .selector': {
                textDecoration: 'none',
            },
        },
    },
    'rightArrow': {
        'fontFamily': 'icomoon',
        'display': '-webkit-inline-box',
        'fontSize': 16,
        'cursor': 'pointer',
        'textAlign': 'right',
        'textAlign': '-webkit-right',
        'fontWeight': 'normal',
        '&:after': {
            content: '"\\ea51"',
        },
    },
    'legal': {
        fontSize: 12,
        lineHeight: 1.67,
        color: '#666',
        fontFamily: 'sans-serif',
        letterSpacing: 'normal',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
    },
    'overlay': {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 101,
        background: 'rgba(0,0,0,0.65)',
    },
    'geoSelector': {
        marginBottom: 24,
    },
    'geoSelectorMobile': {
        marginBottom: 16,
    },
    'selectionContainerMobile': {
        backgroundColor: '#f9f9fa',
        padding: '16px 0px',
    },

});

export default useStyles;
