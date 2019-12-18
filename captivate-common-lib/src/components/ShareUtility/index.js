import React from 'react';
import * as PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import {LinkedinShareButton, EmailShareButton} from 'react-share';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';
import {ThemeProvider} from '@material-ui/styles';

import theme from '../../public/assets/theme';
import {mobileView, ArrowTooltip, ErrorHandler, WarningHandler} from '../../common';

import useStyles from './styles';

/**
 * @visibleName Share Utility
 */

const ShareUtility = (props) => {
    const {data, error, warning} = props;
    const {
        shareUrl,
        showLinkedin,
        showEmail,
        showDownload,
        articleSubject,
        pdfUrl,
        emailTooltip,
        downloadTooltip,
        linkedinTooltip,
    } = data || {};
    const classes = useStyles();
    const isMobile = mobileView();

    const generatePdf = () => {
        !!pdfUrl ?
            window.open(window.location.origin + pdfUrl) :
            window.open(
                (window.location.origin + shareUrl).replace(
                    'html',
                    'pdfGen.pdf'
                )
            );
    };

    return (
        <ThemeProvider theme={theme}>
            {error && error.message !== undefined && <ErrorHandler {...error}/>}
            {warning && warning.warningMessage !== undefined && <WarningHandler {...warning}/>}
            {data !== undefined && (
                <Grid
                    container
                    className={classes.container}
                    alignItems={`${isMobile ? '' : 'flex-start'}`}
                    justify={`${isMobile ? '' : 'flex-end'}`}
                    direction="row"
                    data-testid="shareContainer"
                >
                    {showDownload && !!shareUrl && (
                        <ArrowTooltip
                            title={
                                !!downloadTooltip ?
                                    downloadTooltip :
                                    'Download pdf'
                            }
                            data-testid="pdfTooltip"
                        >
                            <div
                                className={classes.iconContainer}
                                onClick={() => generatePdf()}
                                onKeyPress={() => generatePdf()}
                                role="button"
                                aria-label="download button"
                                tabIndex="0"
                                data-testid="pdfIcon"
                            >
                                <GetAppSharpIcon
                                    htmlColor="#777777"
                                    className={classes.image}
                                />
                            </div>
                        </ArrowTooltip>
                    )}
                    {showLinkedin && !!shareUrl && (
                        <ArrowTooltip
                            title={
                                !!linkedinTooltip ?
                                    linkedinTooltip :
                                    'Share via LinkedIn'
                            }
                            data-testid="linkedinTooltip"
                        >
                            <div className={classes.iconContainer} data-testid="linkedinIcon">
                                <LinkedinShareButton url={shareUrl}>
                                    <LinkedInIcon
                                        htmlColor="#777777"
                                        className={classes.image}
                                    />
                                </LinkedinShareButton>
                            </div>
                        </ArrowTooltip>
                    )}
                    {showEmail && !!shareUrl && (
                        <ArrowTooltip
                            title={
                                !!emailTooltip ?
                                    emailTooltip :
                                    'Share via E-Mail'
                            }
                            data-testid="emailTooltip"
                        >
                            <div
                                className={classes.iconContainer}
                                style={{marginRight: 0}}
                                data-testid="emailIcon"
                            >
                                <EmailShareButton
                                    url={shareUrl}
                                    subject={articleSubject}
                                >
                                    <EmailSharpIcon
                                        htmlColor="#777777"
                                        className={classes.image}
                                    />
                                </EmailShareButton>
                            </div>
                        </ArrowTooltip>
                    )}
                </Grid>
            )}
        </ThemeProvider>
    );
};

ShareUtility.defaultProps = {
    emailTooltip: 'Share via E-Mail',
    downloadTooltip: 'Download pdf',
    linkedinTooltip: 'Share via LinkedIn',
};

ShareUtility.propTypes = {
    /** Article share URL */
    shareUrl: PropTypes.string,
    /** Flag to display Linkedin */
    showLinkedin: PropTypes.bool,
    /** Flag to display Linkedin */
    showEmail: PropTypes.bool,
    /** Flag to display Linkedin */
    showDownload: PropTypes.bool,
    /** Article Subject */
    articleSubject: PropTypes.string,
    /** New pdf URL */
    pdfUrl: PropTypes.string,
    /** email tooltip content */
    emailTooltip: PropTypes.string,
    /** download tooltip content */
    downloadTooltip: PropTypes.string,
    /** linkedin tooltip content */
    linkedinTooltip: PropTypes.string,
};

export default ShareUtility;
