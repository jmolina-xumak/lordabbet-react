import React, {Fragment} from 'react';
import * as PropTypes from 'prop-types';
import {ThemeProvider} from '@material-ui/styles';

import useStyles from './styles';
import {Separator, mobileView} from '..';
import theme from '../../../public/assets/theme';
import ArticleTeaser from '../ArticleTeaser';

/**
 * @visibleName ArticleList
 */

const ArticleList = (props) => {
    const {articles} = props;
    const isMobile = mobileView();
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            {articles && articles.length > 0 &&
                <div className={`${classes.articleListContainer} ${isMobile ? classes.articleListContainerMobile : ''}`}>
                    <div className={`${classes.articleList} ${isMobile ? classes.articleListMobile : ''}`}>
                        {!!isMobile && <Separator />}
                        {articles.map((article, i) => (
                            !!article &&
                            <Fragment key={`article-${i}`}>
                                <ArticleTeaser
                                    article={article}
                                    type={article.type}
                                    date={article.date}
                                    title={article.title}
                                    articleUrl={article.articleUrl}
                                    showSeperator={i !== articles.length - 1}
                                    index={i+2}
                                />
                            </Fragment>
                        ))}
                        {!!isMobile && <Separator />}
                    </div>
                </div>
            }
        </ThemeProvider>
    );
};

ArticleList.defaultProps = {
};

ArticleList.propTypes = {
    articles: PropTypes.array,
};

export default ArticleList;
