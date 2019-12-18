import React from 'react';
import * as PropTypes from 'prop-types';
import {ThemeProvider} from '@material-ui/styles';
import ArticleTeaser from '../ArticleTeaser';

import useStyles from './styles';
import theme from '../../public/assets/theme';
import {mobileView} from '..';

/**
 * @visibleName ArticleSummary
 */

const ArticleSummary = (props) => {
    const classes = useStyles();
    const isMobile = mobileView();

    const {article, index} = props;
    const {articleUrl, imageAlt, imageUrl, type, date, title, timeToRead, copy} = article;

    return (
        <ThemeProvider theme={theme}>
            <div className={`${isMobile ? classes.articleSummaryContainerMobile : classes.articleSummaryContainer}`} data-testid="articleSummaryContainer">
                <ArticleTeaser
                    articleUrl={articleUrl}
                    imageUrl={imageUrl}
                    imageAlt={imageAlt}
                    type={type}
                    date={date}
                    title={title}
                    copy={copy}
                    timeToRead={timeToRead}
                    index={index}
                />
            </div>
        </ThemeProvider>
    );
};

ArticleSummary.defaultProps = {
};

ArticleSummary.propTypes = {
    article: PropTypes.object,
};

export default ArticleSummary;
