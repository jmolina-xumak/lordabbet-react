import React from 'react';
import {render} from '@testing-library/react';

import {RecommendedForYou} from '../../src';
import {recommandedData, errorData} from '../../public/data/recommandedForYouJSON';

test('Loads article summary', () => {
    const {getAllByTestId} = render(<RecommendedForYou {...recommandedData} />);

    const articleSummary = getAllByTestId('articleSummaryContainer');
    expect(articleSummary).toHaveLength(2);

    const articleTeaser = getAllByTestId('articleTeaserContainer');
    expect(articleTeaser).toHaveLength(5);
});

test('Loads and dispay webinar Promotional Block props', () => {
    const {getByTestId} = render(<RecommendedForYou {...recommandedData} />);
    expect(getByTestId('recommandedTitle').innerHTML).toBe(recommandedData.data.title);
    expect(getByTestId('articleTeaserType-0').innerHTML).toBe(recommandedData.data.articlesList[0].type);
    expect(getByTestId('articleTeaserDate-0').innerHTML).toBe(recommandedData.data.articlesList[0].date);
    expect(getByTestId('articleTeaserTitle-0').innerHTML).toBe(recommandedData.data.articlesList[0].title);
    expect(getByTestId('articleTeaserCopy-0').innerHTML).toBe(recommandedData.data.articlesList[0].copy);
    expect(getByTestId('articleTeaserUrl-0').getAttribute('href')).toBe(recommandedData.data.articlesList[0].articleUrl);
});

test('should handle Error and Warning', () => {
    const {getByTestId} = render(<RecommendedForYou {...errorData} />);

    expect(getByTestId('errorCode').innerHTML).toBe(errorData.error.code);
    expect(getByTestId('errorMessage').innerHTML).toBe(errorData.error.message);

    expect(getByTestId('warningMessage').innerHTML).toBe(errorData.warning.warningMessage);
});

test('should render desktop classes', () => {
    const {getByTestId} = render(<RecommendedForYou {...recommandedData} />);
    expect(getByTestId('recommendedForYouContainer').children[0].getAttribute('class')).not.toContain('headerContainerMobile');
    expect(getByTestId('recommandedTitle').getAttribute('class')).not.toContain('headerTextMobile');
    expect(getByTestId('recommendedForYouSummaryContainer').getAttribute('class')).not.toContain('containerMobile');
});

