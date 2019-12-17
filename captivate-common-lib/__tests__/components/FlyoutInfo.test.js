import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import FlyoutInfo from '../../src/common/FlyoutContent/FlyoutInfo';
import { flyoutInfoData, errorData } from '../../public/data/flyoutJSON';

test('Loads and dispay Flyout props', () => {
    const {getByTestId} = render(<FlyoutInfo {...flyoutInfoData.data} />);
    expect(getByTestId('flyoutHeader').innerHTML).toBe(flyoutInfoData.data.header);
    expect(getByTestId('flyoutTitle').innerHTML).toBe(flyoutInfoData.data.title);
    expect(getByTestId('flyoutCategory').innerHTML).toContain(flyoutInfoData.data.category);
    expect(getByTestId('flyoutDate').innerHTML).toBe(flyoutInfoData.data.date);
    expect(getByTestId('flyoutAuthor').innerHTML).toContain(flyoutInfoData.data.author);
    expect(getByTestId('flyoutDescription').innerHTML).toContain(flyoutInfoData.data.description);
    expect(getByTestId('flyoutLink').innerHTML).toContain(flyoutInfoData.data.cta[0].label);
});

test('should call redirection function with click', () => {
    window.location.assign = jest.fn();
    const {getByTestId} = render(<FlyoutInfo {...flyoutInfoData.data} />);
    fireEvent.click(getByTestId('flyoutLink'));
    expect(window.location.assign).toBeCalledWith('http://localhost/test.html');
});

test('should call redirection function with key press', () => {
    window.location.assign = jest.fn();
    const {getByTestId} = render(<FlyoutInfo {...flyoutInfoData.data} />);
    fireEvent.keyPress(getByTestId('flyoutLink'), {key: 'Enter', code: 13, charCode: 13});
    expect(window.location.assign).toBeCalledWith('http://localhost/test.html');
});