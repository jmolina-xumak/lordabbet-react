import {makeStyles} from '@material-ui/styles';
const useStyles = makeStyles({
    flyoutContainer: {
        position: 'fixed',
        bottom: 0,
        maxWidth: 300,
        minWidth: 200,
        right: 20,
        border: '0.5px solid #dddddd',
        backgroundColor: '#ffffff',
        boxShadow: '0 16px 32px 0 rgba(0, 0, 0, 0.25)',
        zIndex: 999999,
        padding: 24,
    },

    container: {
        width: '100%',
        fontFamily: 'DinProRegular',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
    },
    popupContainer: {
        border: '0.5px solid #dddddd',
        backgroundColor: '#ffffff',
        boxShadow: '0 16px 32px 0 rgba(0, 0, 0, 0.25)',
        zIndex: 999999,
        padding: 42,
    },
});

export default useStyles;
