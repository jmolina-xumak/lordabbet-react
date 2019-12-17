import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import {Authors} from '../../src';
import {singleAuthorsData, singleAuthorsBlockData, multipleAuthorsBlockData, multipleAuthorsData, errorData, singleAuthorsBlockNoImageData, multipleAuthorsNoImageData} from '../../public/data/authorsJSON';

global.document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
        nodeName: 'BODY',
        ownerDocument: document,
    },
});

test('Loads and dispay only one author in header', () => {
    const {getAllByTestId} = render(<Authors {...singleAuthorsData} />);
    const authors = getAllByTestId('authorBlockContainer');
    expect(authors).toHaveLength(1);
});

test('Loads and dispay single Authors block for header', () => {
    const {getByTestId} = render(<Authors {...singleAuthorsData} />);
    expect(getByTestId('authorImage-0').children[0].getAttribute('src')).toBe(singleAuthorsData.data.authors[0].imageUrl);
    expect(getByTestId('authorName-0').innerHTML).toBe(singleAuthorsData.data.authors[0].name);
    expect(getByTestId('authorDesignation-0').innerHTML).toBe(singleAuthorsData.data.authors[0].designation);
    expect(getByTestId('authorQualification-0').innerHTML).toBe(singleAuthorsData.data.authors[0].qualification);
});

test('Loads and dispay only one author block', () => {
    const {getAllByTestId} = render(<Authors {...singleAuthorsBlockData} />);
    const authors = getAllByTestId('authorBlockContainer');
    expect(authors).toHaveLength(1);
});


test('Loads and dispay single Authors block', () => {
    const {getByTestId} = render(<Authors {...singleAuthorsBlockData} />);
    expect(getByTestId('authorImage-0').children[0].getAttribute('src')).toBe(singleAuthorsBlockData.data.authors[0].imageUrl);
    expect(getByTestId('authorName-0').innerHTML).toBe(singleAuthorsBlockData.data.authors[0].name);
    expect(getByTestId('authorDesignation-0').innerHTML).toBe(singleAuthorsBlockData.data.authors[0].designation);
    expect(getByTestId('authorQualification-0').innerHTML).toBe(singleAuthorsBlockData.data.authors[0].qualification);
    expect(getByTestId('authorDescription-0').innerHTML).toBe(singleAuthorsBlockData.data.authors[0].description);
});

test('Loads and dispay Multiple Authors block for header', () => {
    const {getAllByTestId} = render(<Authors {...multipleAuthorsData} />);
    const authors = getAllByTestId('authorHeaderContainer');
    expect(authors).toHaveLength(5);
});

test('Loads and dispay multiple Authors block props for header', () => {
    const {getByTestId} = render(<Authors {...multipleAuthorsData} />);
    expect(getByTestId('authorMultiImage-0').children[0].getAttribute('src')).toBe(multipleAuthorsData.data.authors[0].imageUrl);
    expect(getByTestId('authorMultiImage-1').children[0].getAttribute('src')).toBe(multipleAuthorsData.data.authors[1].imageUrl);
    expect(getByTestId('authorMultiImage-2').children[0].getAttribute('src')).toBe(multipleAuthorsData.data.authors[2].imageUrl);
    expect(getByTestId('authorMultiImage-3').children[0].getAttribute('src')).toBe(multipleAuthorsData.data.authors[3].imageUrl);
    expect(getByTestId('authorMultiImage-4').children[0].getAttribute('src')).toBe(multipleAuthorsData.data.authors[4].imageUrl);
});

test('Loads and dispay Multiple Authors block', () => {
    const {getAllByTestId} = render(<Authors {...multipleAuthorsBlockData} />);
    const authors = getAllByTestId('authorBlockContainer');
    expect(authors).toHaveLength(5);
});

test('Loads and dispay Multiple Authors block props', () => {
    const {getByTestId} = render(<Authors {...multipleAuthorsBlockData} />);
    expect(getByTestId('authorName-0').innerHTML).toBe(multipleAuthorsBlockData.data.authors[0].name);
    expect(getByTestId('authorName-1').innerHTML).toBe(multipleAuthorsBlockData.data.authors[1].name);
    expect(getByTestId('authorName-2').innerHTML).toBe(multipleAuthorsBlockData.data.authors[2].name);
    expect(getByTestId('authorName-3').innerHTML).toBe(multipleAuthorsBlockData.data.authors[3].name);
    expect(getByTestId('authorName-4').innerHTML).toBe(multipleAuthorsBlockData.data.authors[4].name);
});

test('Click events', () => {
    window.location.assign = jest.fn();
    const {getByTestId} = render(<Authors {...singleAuthorsData} />);
    fireEvent.click(getByTestId('authorName-0'));
    expect(window.location.assign).toBeCalledWith('http://localhost/test.html');
    fireEvent.click(getByTestId('authorBlockContainer'));
    expect(window.location.assign).toBeCalledWith('http://localhost/test.html');
});

test('Click events', () => {
    window.location.assign = jest.fn();
    const {getByTestId} = render(<Authors {...singleAuthorsBlockData} />);
    fireEvent.click(getByTestId('authorReadMore-0'));
    expect(window.location.assign).toBeCalledWith('http://localhost/test.html');
});

test('Author Tooltips', () => {
    window.location.assign = jest.fn();
    const {getByTestId} = render(<Authors {...multipleAuthorsData} />);

    fireEvent.mouseEnter(getByTestId('authorIcon-0'));
    expect(getByTestId('authorTooltipName-0').innerHTML).toBe(multipleAuthorsData.data.authors[0].name);
    expect(getByTestId('authorTooltipQualification-0').innerHTML).toBe(multipleAuthorsData.data.authors[0].qualification);
    expect(getByTestId('authorTooltipDesignation-0').innerHTML).toBe(multipleAuthorsData.data.authors[0].designation);

    fireEvent.click(getByTestId('authorTooltipName-0'));
    expect(window.location.assign).toBeCalledWith('http://localhost/test.html');

    fireEvent.mouseEnter(getByTestId('authorIcon-1'));
    fireEvent.keyPress(getByTestId('authorTooltipName-1'), {key: 'Enter', code: 13, charCode: 13});
    expect(window.location.assign).toBeCalledWith('http://localhost/test.html');
});

test('Key press events', () => {
    window.location.assign = jest.fn();
    const {getByTestId} = render(<Authors {...singleAuthorsData} />);
    fireEvent.keyPress(getByTestId('authorName-0'), {key: 'Enter', code: 13, charCode: 13});
    expect(window.location.assign).toBeCalledWith('http://localhost/test.html');
    fireEvent.keyPress(getByTestId('authorBlockContainer'), {key: 'Enter', code: 13, charCode: 13});
    expect(window.location.assign).toBeCalledWith('http://localhost/test.html');
});

test('Key press events', () => {
    window.location.assign = jest.fn();
    const {getByTestId} = render(<Authors {...singleAuthorsBlockData} />);
    fireEvent.keyPress(getByTestId('authorReadMore-0'), {key: 'Enter', code: 13, charCode: 13});
    expect(window.location.assign).toBeCalledWith('http://localhost/test.html');
});

test('should handle Error and Warning', () => {
    const {getByTestId} = render(<Authors {...errorData} />);

    expect(getByTestId('errorCode').innerHTML).toBe(errorData.error.code);
    expect(getByTestId('errorMessage').innerHTML).toBe(errorData.error.message);

    expect(getByTestId('warningMessage').innerHTML).toBe(errorData.warning.warningMessage);
});

test('should render placeholder classes', () => {
    const {getByTestId} = render(<Authors {...singleAuthorsBlockNoImageData} />);
    expect(getByTestId('authorPlaceholderImage-0')).toBeTruthy();
});

test('should render placeholder classes', () => {
    const {getByTestId} = render(<Authors {...multipleAuthorsNoImageData} />);
    expect(getByTestId('authorMultiPlaceholderImage-0')).toBeTruthy();
});
