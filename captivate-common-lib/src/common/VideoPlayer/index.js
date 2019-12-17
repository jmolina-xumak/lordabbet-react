import React from 'react';
import ReactPlayerLoader from '@brightcove/react-player-loader';

import useStyles from './styles';
import {BRIGHTCOVE_ACCOUNT, BRIGHTCOVE_PLAYER, BRIGHTCOVE_GENERIC_PLAYER} from '../../../public/constants';

const VideoPlayer = (props) => {
    const {videoId} = props;
    const classes = useStyles();
    console.log('process.env :', process.env.NODE_ENV);

    return (
        <ReactPlayerLoader
            accountId={BRIGHTCOVE_ACCOUNT}
            videoId={videoId}
            playerId={process.env.NODE_ENV === 'development' ? BRIGHTCOVE_GENERIC_PLAYER : BRIGHTCOVE_PLAYER}
            attrs={{className: classes.player}}
            options={{
                autoplay: false,
            }}
        />

    );
};

export default VideoPlayer;
