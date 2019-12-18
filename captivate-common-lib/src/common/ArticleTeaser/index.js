import React from 'react';
import * as PropTypes from 'prop-types';
import {ThemeProvider} from '@material-ui/styles';
import AccessTimeSharp from '@material-ui/icons/AccessTimeSharp';

import useStyles from './styles';
import {Separator} from '..';
import theme from '../../public/assets/theme';

/**
 * @visibleName ArticleTeaser
 */

const renderImage = (imageUrl, imageAlt, timeToRead, classes) => {
    return (!!imageUrl &&
        <div
            style={{
                position: 'relative',
            }}
        >
            <img className={classes.image} alt={!!imageAlt ? imageAlt: 'image'} src={imageUrl}/>
            <div
                style={{
                    position: 'absolute',
                    bottom: 8,
                    left: 8,
                    textDecoration: 'none',
                    backgroundColor: '#111111',
                    opacity: .8,
                    color: '#ffffff',
                    borderRadius: 2,
                    height: 20,
                }}
            >
                <AccessTimeSharp
                    style={{
                        fontSize: 12,
                        marginTop: 4,
                        marginLeft: 4,
                        marginBottom: 4,
                    }}
                />
                <span
                    style={{
                        fontFamily: 'Arial',
                        fontSize: 12,
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 1.67,
                        letterSpacing: 'normal',
                        margin: 'auto 4px',
                        float: 'right',
                    }}
                >
                    {timeToRead}
                </span>
            </div>
        </div>
    );
};

const ArticleTeaser = (props) => {
    const {showSeperator, imageUrl, imageAlt, type, date, title, copy, articleUrl, timeToRead, index} = props;
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div data-testid="articleTeaserContainer">
                <a style={{textDecoration: 'none'}} href={articleUrl} data-testid={`articleTeaserUrl-${index}`}>
                    {renderImage(imageUrl, imageAlt, timeToRead, classes)}
                    <div className={classes.typeDate}>
                        <span data-testid={`articleTeaserType-${index}`}>{type}</span>
                        <span className={classes.dot}>  •  </span>
                        <span data-testid={`articleTeaserDate-${index}`}>{date}</span>
                    </div>
                    <div className={classes.title}>
                        <span data-testid={`articleTeaserTitle-${index}`}>{title}</span>
                    </div>
                    {!!copy &&
                    <div className={classes.copy}>
                        <span data-testid={`articleTeaserCopy-${index}`}>{copy}</span>
                    </div>
                    }
                </a>
            </div>
            {showSeperator && <Separator />}
        </ThemeProvider>
    );
};

ArticleTeaser.defaultProps = {
};

ArticleTeaser.propTypes = {
    articleUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    imageAlt: PropTypes.string,
    type: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    copy: PropTypes.string,
    timeToRead: PropTypes.string,
};

export default ArticleTeaser;
