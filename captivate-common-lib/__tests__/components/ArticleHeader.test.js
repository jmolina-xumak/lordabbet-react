import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import {ArticleHeader} from '../../src';
import {articleHeader, errorData} from '../../public/data/articleHeaderJSON';

test('Loads and dispay article props', () => {
    const {getByTestId} = render(<ArticleHeader {...articleHeader} />);
    expect(getByTestId('articleTitle').innerHTML).toBe(articleHeader.data.title);
    expect(getByTestId('articleCategory').innerHTML).toBe(articleHeader.data.category);
    expect(getByTestId('articleTimeToRead').innerHTML).toContain(articleHeader.data.timeToRead);
    expect(getByTestId('articleDescription').innerHTML).toBe(articleHeader.data.description);
    expect(getByTestId('articleDate').innerHTML).toContain(articleHeader.data.date);
});

test('should call redirection function with click', () => {
    window.location.assign = jest.fn();
    const {getByTestId} = render(<ArticleHeader {...articleHeader} />);
    fireEvent.click(getByTestId('articleCategory'));
    expect(window.location.assign).toBeCalledWith('http://localhost/test.html');
});

test('should call redirection function with key press', () => {
    window.location.assign = jest.fn();
    const {getByTestId} = render(<ArticleHeader {...articleHeader} />);
    fireEvent.keyPress(getByTestId('articleCategory'), {key: 'Enter', code: 13, charCode: 13});
    expect(window.location.assign).toBeCalledWith('http://localhost/test.html');
});

test('should handle Error and Warning', () => {
    const {getByTestId} = render(<ArticleHeader {...errorData} />);

    expect(getByTestId('errorCode').innerHTML).toBe(errorData.error.code);
    expect(getByTestId('errorMessage').innerHTML).toBe(errorData.error.message);

    expect(getByTestId('warningMessage').innerHTML).toBe(errorData.warning.warningMessage);
});

test('should render desktop classes', () => {
    const {getByTestId} = render(<ArticleHeader {...articleHeader} />);
    expect(getByTestId('articleTitle').getAttribute('class')).not.toContain('mobileTitle');
    expect(getByTestId('articleDescription').getAttribute('class')).not.toContain('mobileDescription');
});

