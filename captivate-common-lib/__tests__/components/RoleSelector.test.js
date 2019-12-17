import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import * as ReactGA from 'react-ga';

import {RoleSelector} from '../../src';
import {
    roleSelection, errorData,
} from '../../public/data/roleSelectionJSON';

const deleteCookie = () => {
    document.cookie = 'LA_ROLETYPE=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

test('Loads and dispay header and subheader', () => {
    const {getByTestId} = render(<RoleSelector {...roleSelection} />);
    expect(getByTestId('roleHeader').innerHTML).toBe(roleSelection.data.header);
    expect(getByTestId('roleSubheader').innerHTML).toBe(roleSelection.data.subHeader);

    expect(getByTestId('roleName-0').innerHTML).toBe(roleSelection.data.countries[20].roles[0].name);
    expect(getByTestId('roleName-1').innerHTML).toBe(roleSelection.data.countries[20].roles[1].name);
});

test('should call redirection function with key press and google analytics event', () => {
    window.location.assign = jest.fn();
    const {getByTestId} = render(<RoleSelector {...roleSelection} />);
    fireEvent.keyPress(getByTestId('roleSelectionContainer-0'), {key: 'Enter', code: 13, charCode: 13});

    expect(ReactGA.testModeAPI.calls[0][0]).toBe('create');
    expect(ReactGA.testModeAPI.calls[0][1]).toBe('UA-16021082-16');

    expect(ReactGA.testModeAPI.calls[4][1].hitType).toBe('event');
    expect(ReactGA.testModeAPI.calls[4][1].eventCategory).toBe('Financial Advisor');
    expect(ReactGA.testModeAPI.calls[4][1].eventAction).toBe('Role Selected');
    expect(ReactGA.testModeAPI.calls[4][1].eventLabel).toBe('User Clicked the Role Button');

    expect(window.location.assign).toBeCalledWith('http://localhost/test.html');
});

test('should handle Error and Warning', () => {
    const {getByTestId} = render(<RoleSelector {...errorData} />);

    expect(getByTestId('errorCode').innerHTML).toBe(errorData.error.code);
    expect(getByTestId('errorMessage').innerHTML).toBe(errorData.error.message);

    expect(getByTestId('warningMessage').innerHTML).toBe(errorData.warning.warningMessage);
});
