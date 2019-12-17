import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.43,
        letterSpacing: 'normal',
        fontSize: 14,
        fontWeight: 'normal',
        marginBottom: 24,
    },
    imageContainer: {
        display: 'inline-block',
        width: 48,
        marginRight: 16,
        position: 'absolute',
    },
    infoContainer: {
        width: 'calc(100% - 64px)',
        display: 'inline-block',
        marginLeft: 64,
    },
    headerImage: {
        height: 48,
        width: 48,
        border: '2px solid #a19167',
        cursor: 'pointer',
    },
    avatarImage: {
        height: 48,
        width: 48,
        border: '2px solid #a19167',
        cursor: 'pointer',
        borderRadius: 48,
        background: '#fff',
    },
    image: {
        padding: 8,
        fontSize: 32,
    },
    hoverHeaderImage: {
        'position': 'relative',
        'top': 0,
        'transition': 'top ease 0.5s',
        '&:hover': {
            top: -10,
        },
    },
    headerName: {
        'fontWeight': 'bold',
        'color': '#151515',
        'marginRight': 8,
        'display': 'inline-block',
        'cursor': 'pointer',
        'textTransform': 'capitalize',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    headerQualification: {
        color: '#333333',
        lineSpacing: 0.14,
    },
    headerDesignation: {
        fontFamily: 'Georgia',
        fontStyle: 'italic',
        lineHeight: 1.14,
        color: '#757575',
        fontSize: 16,
    },
    headerNameContainer: {
        margin: '4px 0',
    },
    headerDescription: {
        lineHeight: 1.71,
        color: '#757575',
        letterSpacing: 0.14,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        marginTop: 19,
    },
    authorBlockSeperator: {
        border: '1px solid #333',
        width: '100%',
        marginBottom: 16,
    },
    overlappedAuthor: {
        marginLeft: -10,
    },
    tooltipName: {
        fontWeight: 'bold',
        color: '#151515',
        textDecoration: 'underline',
        marginRight: 8,
        letterSpacing: 0.14,
        fontSize: 14,
        fontStretch: 'normal',
        lineHeight: 1.71,
        textTransform: 'capitalize',
        cursor: 'pointer',
    },
    tooltipQualification: {
        color: '#333333',
        letterSpacing: 0.14,
    },
    tooltipDesignation: {
        fontFamily: 'Georgia',
        fontSize: 16,
        fontStyle: 'italic',
        color: '#757575',
        fontWeight: 'normal',
    },
    readMore: {
        color: '#0a855b',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginTop: 8,
        letterSpacing: 'normal',
        cursor: 'pointer',
    },
});

export default useStyles;
