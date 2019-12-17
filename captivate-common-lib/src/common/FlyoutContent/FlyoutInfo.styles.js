import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        width: '100%',
        fontFamily: 'DinProRegular',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        fontSize: 12,
        letterSpacing: 'normal',
    },
    header: {
        fontWeight: 500,
        letterSpacing: 0.6,
        color: '#84754d',
        textTransform: 'uppercase',
        marginBottom: 17,
        marginTop: 14,
        lineHeight: 1.33,
    },
    title: {
        fontWeight: 500,
        fontFamily: 'DinProBold',
        fontSize: 18,
        color: '#222222',
        marginBottom: 18,
        lineHeight: 1.33,
    },
    category: {
        fontWeight: 'normal',
        fontFamily: 'Arial',
        fontSize: 14,
        color: '#666666',
        marginBottom: 7,
        lineHeight: 1.57,
    },
    dot: {
        width: 3,
        height: 3,
        borderRadius: '50%',
        background: '#666666',
        display: 'inline-block',
        margin: '5px 8px 3px 8px',
    },
    author: {
        fontFamily: 'Georgia',
        fontSize: 14,
        fontStyle: 'italic',
        lineHeight: 1.57,
        color: '#666666',
        marginBottom: 16,
    },
    description: {
        fontFamily: 'Arial',
        fontSize: 14,
        lineHeight: 1.57,
        color: '#444444',
        marginBottom: 16,
    },
    icon: {
        width: 48,
        height: 48,
        border: '1px solid #a19167',
        borderRadius: 75,
        backgroundColor: '#a19167',
        marginTop: -50,
    },
    iconImage: {
        padding: 12,
    },
});

export default useStyles;
