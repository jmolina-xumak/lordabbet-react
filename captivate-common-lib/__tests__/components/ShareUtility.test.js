import {
    render,
    getByTestId,
    queryAllByTestId,
    fireEvent,
} from '@testing-library/react';
import React from 'react';

import {ShareUtility} from '../../src';
import {shareUtilityData, errorData, shareUtilityDataWithTooltipData} from '../../public/data/shareUtilityJSON';

global.document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
        nodeName: 'BODY',
        ownerDocument: document,
    },
});

test('should have data attribute', () => {
    const {container} = render(<ShareUtility {...shareUtilityData} />);
    expect(queryAllByTestId(container, 'shareContainer')).toBeTruthy();
    expect(queryAllByTestId(container, 'pdfIcon')).toBeTruthy();
});

test('Loads and dispay Share Utility props', () => {
    const {getByTestId} = render(<ShareUtility {...shareUtilityData} />);
    expect(getByTestId('pdfIcon').getAttribute('aria-label')).toBe('download button');
});

test('should handle click event', () => {
    global.open = jest.fn();
    const {container} = render(<ShareUtility {...shareUtilityData} />);
    fireEvent.click(getByTestId(container, 'pdfIcon'));
    expect(global.open).toBeCalled();

    fireEvent.keyPress(getByTestId(container, 'pdfIcon'));
    expect(global.open).toBeCalled();
});

test('should call pdf function with click', () => {
    window.open = jest.fn();
    const {getByTestId} = render(<ShareUtility {...shareUtilityData} />);
    fireEvent.click(getByTestId('pdfIcon'));
    expect(window.open).toBeCalledWith('http://localhost/en/perspectives/marketview/investments-whats-ahead-fourth-quarter.pdfGen.pdf');
});

test('should call pdf function with click with pdf url is given', () => {
    window.open = jest.fn();
    const {getByTestId} = render(<ShareUtility {...shareUtilityDataWithTooltipData} />);
    fireEvent.click(getByTestId('pdfIcon'));
    expect(window.open).toBeCalledWith('http://localhost/test.pdf');
});

test('should call pdf function with key press', () => {
    window.open = jest.fn();
    const {getByTestId} = render(<ShareUtility {...shareUtilityData} />);
    fireEvent.keyPress(getByTestId('pdfIcon'), {key: 'Enter', code: 13, charCode: 13});
    expect(window.open).toBeCalledWith('http://localhost/en/perspectives/marketview/investments-whats-ahead-fourth-quarter.pdfGen.pdf');
});

test('should call pdf function with key press with pdf url is given', () => {
    window.open = jest.fn();
    const {getByTestId} = render(<ShareUtility {...shareUtilityDataWithTooltipData} />);
    fireEvent.keyPress(getByTestId('pdfIcon'), {key: 'Enter', code: 13, charCode: 13});
    expect(window.open).toBeCalledWith('http://localhost/test.pdf');
});

test('should handle Error and Warning', () => {
    const {getByTestId} = render(<ShareUtility {...errorData} />);

    expect(getByTestId('errorCode').innerHTML).toBe(errorData.error.code);
    expect(getByTestId('errorMessage').innerHTML).toBe(errorData.error.message);

    expect(getByTestId('warningMessage').innerHTML).toBe(errorData.warning.warningMessage);
});

test('should display default tooltip message', async () => {
    const {getByTestId, findByText} = render(<ShareUtility {...shareUtilityData} />);
    let item;

    fireEvent.mouseEnter(getByTestId('linkedinIcon'));
    item = await findByText(/Share via LinkedIn/i);
    expect(item).toBeTruthy();

    fireEvent.mouseEnter(getByTestId('pdfIcon'));
    item = await findByText(/Download pdf/i);
    expect(item).toBeTruthy();

    fireEvent.mouseEnter(getByTestId('emailIcon'));
    item = await findByText(/Share via E-Mail/i);
    expect(item).toBeTruthy();
});

test('should display give tooltip message', async () => {
    const {getByTestId, findByText} = render(<ShareUtility {...shareUtilityDataWithTooltipData} />);
    let item;

    fireEvent.mouseEnter(getByTestId('linkedinIcon'));
    item = await findByText(/linkedin tooltip/i);
    expect(item).toBeTruthy();

    fireEvent.mouseEnter(getByTestId('pdfIcon'));
    item = await findByText(/download tooltip/i);
    expect(item).toBeTruthy();

    fireEvent.mouseEnter(getByTestId('emailIcon'));
    item = await findByText(/email tooltip/i);
    expect(item).toBeTruthy();
});
