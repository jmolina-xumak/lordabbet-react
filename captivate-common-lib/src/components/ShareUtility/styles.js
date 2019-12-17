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
    iconContainer: {
        'height': 48,
        'width': 48,
        'border': '1px solid #eceeef',
        'borderRadius': 48,
        'cursor': 'pointer',
        'marginRight': 8,
        'outlineWidth': 0,
        '&:focus': {outline: 0},
    },
    div: {
        '&:focus': {outline: 0},
    },
    image: {
        padding: 12,
    },
});

export default useStyles;
