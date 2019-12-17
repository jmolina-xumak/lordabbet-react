import {makeStyles} from '@material-ui/styles';
const useStyles = makeStyles({
    container: {
        fontFamily: 'DinProRegular',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        fontSize: 12,
        width: 1024,
        margin: '0 auto',
        padding: '0px 20px',
    },
    containerMobile: {
        width: '100%',
        padding: '0px',
    },
    headerContainer: {
        width: 1024,
        margin: '0 auto',
        marginBottom: 24,
        fontFamily: 'DinProMedium',
        fontSize: 20,
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.6,
        letterSpacing: 0.2,
        color: '#222222',
    },
    headerContainerMobile: {
        width: '100%',
        marginBottom: 24,
    },
    headerText: {
        marginLeft: 20,
        marginRight: 20,
    },
    headerTextMobile: {
        marginLeft: 16,
        marginRight: 16,
    },
});

export default useStyles;
