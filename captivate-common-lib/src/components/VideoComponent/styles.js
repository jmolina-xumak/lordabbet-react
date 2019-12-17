import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    header: {
        fontSize: 12,
        lineHeight: 1.33,
        letterSpacing: 0.6,
        color: '#a19167',
        fontWeight: 500,
        textTransform: 'uppercase',
        marginBottom: 8,
    },
    title: {
        fontSize: 28,
        fontWeight: 500,
        color: '#222222',
        lineHeight: 1.29,
        marginBottom: 16,
    },
    description: {
        marginBottom: 32,
        fontFamily: 'Arial',
        lineHeight: 1.75,
        fomtSize: 16,
        color: '#333333',
    },
});

export default useStyles;
