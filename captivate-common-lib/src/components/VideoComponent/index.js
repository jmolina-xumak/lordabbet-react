import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {Grid} from '@material-ui/core';

import theme from '../../public/assets/theme';
import {PopupContainer, ErrorHandler, WarningHandler, VideoPlayer} from '../../common';
import useStyles from './styles';

const VideoComponent = (props) => {
    const {data, error, warning} = props;
    const {videoId, accountId, header, title, description} = data || {};
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            {error && error.message !== undefined && <ErrorHandler {...error}/>}
            {warning && warning.warningMessage !== undefined && <WarningHandler {...warning} />}
            {data !== undefined && (
                <PopupContainer>
                    {!!header &&
                        <Grid item xs={12} className={classes.header} data-testid='videoHeader'>
                            {header}
                        </Grid>
                    }
                    {!!title &&
                        <Grid item xs={12} className={classes.title} data-testid='videoTitle'>
                            {title}
                        </Grid>
                    }
                    {!!description &&
                        <Grid item xs={12} className={classes.description} data-testid='videoDescription'>
                            {description}
                        </Grid>
                    }
                    {!!videoId &&
                    <VideoPlayer
                        videoId={videoId}
                    />
                    }
                </PopupContainer>
            )}
        </ThemeProvider>
    );
};

export default VideoComponent;
