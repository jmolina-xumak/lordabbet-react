import React from 'react';
import {render} from '@testing-library/react';

import {PromotionalBlock} from '../../src';
import {webinarPromotion, socialTwitterPromotion, findRepPromotion, newsLetterPromotion, specialCollectionPromotion, errorData} from '../../public/data/promotionalBlockJSON';

test('Loads and dispay webinar Promotional Block props', () => {
    const {getByTestId} = render(<PromotionalBlock {...webinarPromotion} />);
    expect(getByTestId('promotionalBlockImage').getAttribute('src')).toBe(webinarPromotion.data.imageUrl);
    expect(getByTestId('promotionalBlockTitle').innerHTML).toBe(webinarPromotion.data.title);
    expect(getByTestId('promotionalBlockDescription').innerHTML).toBe(webinarPromotion.data.description);
    expect(getByTestId('buttonLabel').innerHTML).toBe(webinarPromotion.data.buttonLabel);
});

test('Loads and dispay Twitter Promotional Block props', () => {
    const {getByTestId} = render(<PromotionalBlock {...socialTwitterPromotion} />);
    expect(getByTestId('promotionalBlockImage').getAttribute('src')).toBe(socialTwitterPromotion.data.imageUrl);
    expect(getByTestId('promotionalBlockTitle').innerHTML).toBe(socialTwitterPromotion.data.title);
    expect(getByTestId('promotionalBlockDescription').innerHTML).toBe(socialTwitterPromotion.data.description);
    expect(getByTestId('buttonLabel').innerHTML).toBe(socialTwitterPromotion.data.buttonLabel);
});

test('Loads and dispay Find your rep Promotional Block props', () => {
    const {getByTestId} = render(<PromotionalBlock {...findRepPromotion} />);
    expect(getByTestId('promotionalBlockImage').getAttribute('src')).toBe(findRepPromotion.data.imageUrl);
    expect(getByTestId('promotionalBlockTitle').innerHTML).toBe(findRepPromotion.data.title);
    expect(getByTestId('promotionalBlockDescription').innerHTML).toBe(findRepPromotion.data.description);
    expect(getByTestId('buttonLabel').innerHTML).toBe(findRepPromotion.data.buttonLabel);
});

test('Loads and dispay newsLetter Promotional Block props', () => {
    const {getByTestId} = render(<PromotionalBlock {...newsLetterPromotion} />);
    expect(getByTestId('promotionalBlockImage').getAttribute('src')).toBe(newsLetterPromotion.data.imageUrl);
    expect(getByTestId('promotionalBlockTitle').innerHTML).toBe(newsLetterPromotion.data.title);
    expect(getByTestId('promotionalBlockDescription').innerHTML).toBe(newsLetterPromotion.data.description);
    expect(getByTestId('buttonLabel').innerHTML).toBe(newsLetterPromotion.data.buttonLabel);
});

test('Loads and dispay special collection Promotional Block props', () => {
    const {getByTestId} = render(<PromotionalBlock {...specialCollectionPromotion} />);
    expect(getByTestId('promotionalBlockImage').getAttribute('src')).toBe(specialCollectionPromotion.data.imageUrl);
    expect(getByTestId('promotionalBlockTitle').innerHTML).toBe(specialCollectionPromotion.data.title);
    expect(getByTestId('promotionalBlockDescription').innerHTML).toBe(specialCollectionPromotion.data.description);
    expect(getByTestId('buttonLabel').innerHTML).toBe(specialCollectionPromotion.data.buttonLabel);
    expect(getByTestId('promotionalBlockHeader').innerHTML).toBe(specialCollectionPromotion.data.header);
});

test('should handle Error and Warning', () => {
    const {getByTestId} = render(<PromotionalBlock {...errorData} />);

    expect(getByTestId('errorCode').innerHTML).toBe(errorData.error.code);
    expect(getByTestId('errorMessage').innerHTML).toBe(errorData.error.message);

    expect(getByTestId('warningMessage').innerHTML).toBe(errorData.warning.warningMessage);
});

