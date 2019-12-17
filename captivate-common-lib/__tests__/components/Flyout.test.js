import React from 'react';
import {render} from '@testing-library/react';

import {Flyout} from '../../src';
import {flyoutInfoData, flyoutActionData, errorData} from '../../public/data/flyoutJSON';

test('Loads and dispay Flyout info Component props', () => {
    const { getByTestId } = render(<Flyout {...flyoutInfoData} />);
    expect(getByTestId('flyoutHeader').innerHTML).toBe(flyoutInfoData.data.header);
});

test('Loads and dispay Flyout action Component props', () => {
    const {getByTestId} = render(<Flyout {...flyoutActionData} />);
    expect(getByTestId('title').innerHTML).toBe(flyoutActionData.data.title);
});


test('should handle Error and Warning', () => {
    const {getByTestId} = render(<Flyout {...errorData} />);

    expect(getByTestId('errorCode').innerHTML).toBe(errorData.error.code);
    expect(getByTestId('errorMessage').innerHTML).toBe(errorData.error.message);

    expect(getByTestId('warningMessage').innerHTML).toBe(errorData.warning.warningMessage);
});
