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
    category: {
        fontWeight: 500,
        letterSpacing: 0.6,
        color: '#0a855b',
        border: '1px solid rgba(10, 133, 91, 0.4)',
        padding: '8px 15px 8px 15px',
        borderRadius: 16,
        textTransform: 'uppercase',
        marginBottom: 16,
        lineHeight: 1.4,
        cursor: 'pointer',
    },
    title: {
        fontSize: 38,
        letterSpacing: -0.38,
        color: '#151515',
        marginBottom: 16,
        lineHeight: 1.26,
    },
    mobileTitle: {
        fontSize: 28,
        lineHeight: 1.43,
    },
    date: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 'normal',
        color: '#84754d',
        marginBottom: 32,
    },
    minRead: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 'normal',
        color: '#84754d',
        marginBottom: 32,
    },
    dot: {
        width: 5,
        height: 5,
        borderRadius: '50%',
        background: '#84754d',
        display: 'inline-block',
        margin: '8px 8px 2px 8px',
    },
    mobileDescription: {
        fontSize: 16,
        lineHeight: 1.63,
    },
    description: {
        fontFamily: 'Georgia',
        fontSize: 20,
        fontStyle: 'italic',
        letterSpacing: 'normal',
        color: '#757575',
        marginBottom: 37,
    },
});

export default useStyles;
