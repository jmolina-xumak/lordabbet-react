import React from 'react';
import * as PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';

import ArticleSummary from '../../common/ArticleSummary';
import ArticleList from '../../common/ArticleList';
import theme from '../../public/assets/theme';
import {mobileView, ErrorHandler, WarningHandler} from '../../common';
import useStyles from './styles';

/**
 * @visibleName RecommendedForYou
 */

const RecommendedForYou = (props) => {
    const {data, error, warning} = props;
    const {articlesList, title} = data;
    const {2: third, 3: fourth, 4: fifth} = articlesList;
    const supplementArticles = [];
    supplementArticles.push(!!third && third, !!fourth && fourth, !!fifth && fifth);
    const isMobile = mobileView();
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            {error && error.message !== undefined && <ErrorHandler {...error}/>}
            {warning && warning.warningMessage !== undefined && <WarningHandler {...warning}/>}
            {articlesList && articlesList.length > 0 &&
                <div
                    style={{
                        width: '100%',
                        backgroundColor: '#fbfbfb',
                        paddingBottom: 48,
                    }}
                    data-testid="recommendedForYouContainer"
                >
                    <div
                        className={`${classes.headerContainer} ${isMobile ? classes.headerContainerMobile : ''}`}
                    >
                        <span className={`${classes.headerText} ${isMobile ? classes.headerTextMobile : ''}`} data-testid="recommandedTitle">
                            {title}
                        </span>
                    </div>
                    <Grid
                        container
                        className={`${classes.container} ${isMobile ? classes.containerMobile : ''}`}
                        direction="row"
                        spacing={0}
                        data-testid="recommendedForYouSummaryContainer"
                    >
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                            <ArticleSummary article={articlesList[0]} index="0" />
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                            <ArticleSummary article={articlesList[1]} index="1" />
                        </Grid>
                        {supplementArticles.length > 0 &&
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                            <ArticleList articles={supplementArticles} />
                        </Grid>
                        }
                    </Grid>
                </div>
            }
        </ThemeProvider>
    );
};

RecommendedForYou.defaultProps = {
    data: {
        title: 'Idio Driven',
        articlesList: [
            {
                articleUrl: 'https://www.lordabbett.com/en/perspectives/marketview/three-market-divergences-signaling-potential-opportunities.html',
                imageUrl: 'https://patientengagementhit.com/images/site/features/rural_hospital_access.jpg',
                imageAlt: 'Lorem ipsum',
                type: 'Type',
                date: 'January 1, 1970',
                title: 'Lorem ipsum dolor sit amet',
                copy: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                timeToRead: '11:00',
            },
            {
                articleUrl: 'https://www.lordabbett.com/en/perspectives/marketview/three-market-divergences-signaling-potential-opportunities.html',
                imageUrl: 'https://patientengagementhit.com/images/site/features/rural_hospital_access.jpg',
                imageAlt: 'Lorem ipsum',
                type: 'Type',
                date: 'January 1, 1970',
                title: 'Lorem ipsum dolor sit amet',
                copy: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                timeToRead: '13:00',
            },
            {
                type: 'Type',
                date: 'January 1, 1971',
                title: 'Lorem ipsum dolor sit amet',
                articleUrl: 'https://www.lordabbett.com/en/perspectives/marketview/three-market-divergences-signaling-potential-opportunities.html',
            },
            {
                type: 'Type',
                date: 'January 1, 1972',
                title: 'Lorem ipsum dolor sit amet',
                articleUrl: 'https://www.lordabbett.com/en/perspectives/marketview/three-market-divergences-signaling-potential-opportunities.html',
            },
            {
                type: 'Type',
                date: 'January 1, 1973',
                title: 'Lorem ipsum dolor sit amet',
                articleUrl: 'https://www.lordabbett.com/en/perspectives/marketview/three-market-divergences-signaling-potential-opportunities.html',
            },
        ],
    },
};

RecommendedForYou.propTypes = {
    title: PropTypes.string,
    teasers: PropTypes.array,
    supplements: PropTypes.array,
};

export default RecommendedForYou;
