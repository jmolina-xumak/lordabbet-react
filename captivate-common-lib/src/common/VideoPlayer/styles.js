import {makeStyles} from '@material-ui/styles';
const useStyles = makeStyles({
    player: {
        'width': '100%',
        '& video-js': {
            height: 300,
            width: '100%',
        },
    },
});

export default useStyles;
