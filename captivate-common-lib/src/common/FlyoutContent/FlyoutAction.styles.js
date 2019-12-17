import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    title: {
        fontWeight: 500,
        fontFamily: 'DinProBold',
        fontSize: 18,
        color: '#222222',
        fontStretch: 'normal',
        fontStyles: 'normal',
        letterSpacing: 'normal',
        marginBottom: 18,
        lineHeight: 1.33,
    },
    description: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.71,
        letterSpacing: '0.14px',
        color: '#777777',
        marginBottom: 22,
    },
    positive: {

    },
    negative: {
        marginTop: 8,
    },
});

export default useStyles;
