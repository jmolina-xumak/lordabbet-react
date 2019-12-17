import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        width: '100%',
        fontFamily: 'DinProRegular',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        fontSize: 12,
    },
    imageContainer: {
        width: '100%',
        height: 184,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontFamily: 'DinProMedium',
        fontSize: 20,
        fontWeight: 500,
        lineHeight: 1.4,
        letterSpacing: 0.2,
        color: '#151515',
        marginBottom: 8,
        marginTop: 8,
    },
    description: {
        fontFamily: 'Arial',
        fontSize: 14,
        lineHeight: 1.71,
        letterSpacing: 0.14,
        color: '#757575',
        marginBottom: 16,
    },
    textField: {
        'marginBottom': 8,
        'borderRadius': 4,
        'borderColor': '#c5cacc',
        'width': '100%',
        '& input': {
            'padding': 8,
            '&::placeholder': {
                'fontFamily': 'Arial',
                'fontSize': 14,
                'letterSpacing': 0.14,
                'color': '#757575',
            },
        },
    },
    header: {
        marginTop: 10,
        fontSize: 14,
        color: '#84754d',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: 0.6,
        lineHeight: 1.33,
    },
    buttonOutlined: {
        color: '#0a855b',
        border: '1px solid #0a855b',
        borderRadius: 4,
        padding: '8px 12px 8px 13px',
        fontFamily: 'DinProMedium',
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: 0.6,
    },
    buttonNotContained: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 1.86,
        color: '#0a855b',
        padding: 0,
    },
    buttonContained: {
        'border': '1px solid #06563b',
        'borderRadius': 4,
        'padding': '8px 12px 8px 13px',
        'backgroundColor': '#06563b',
        'opacity': 0.8,
        '& span': {
            'fontFamily': 'DinProMedium',
            'fontSize': 12,
            'fontWeight': 500,
            'letterSpacing': 0.6,
            'color': '#ffffff',
        },
    },
    buttonLabel: {
        margin: '4px 0 0 8px',
    },
    dataContainer: {
        border: '1px solid #c5cacc',
        padding: 16,
    },
    icon: {
        width: 48,
        height: 48,
        border: '1px solid #a19167',
        borderRadius: 75,
        backgroundColor: '#a19167',
        marginTop: -40,
    },
    iconImage: {
        padding: 12,
    },
    visuallyHidden: {
        position: 'absolute !important',
        height: 1,
        width: 1,
        overflow: 'hidden',
        clip: 'rect(1px, 1px, 1px, 1px)',
        whiteSpace: 'nowrap', /* added line */
    },
});

export default useStyles;
