import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import {CookieDisclaimer} from '../../src';
import {cookieDisclaimerJSON, cookieDisclaimerNoUrlJSON} from '../../public/data/cookieDisclaimerJSON';
import {getCookie} from '../../src/common';

test('Loads and dispay CookieDisclaimer Component props', () => {
    const {getByTestId} = render(<CookieDisclaimer {...cookieDisclaimerNoUrlJSON} />);
    expect(getByTestId('description').innerHTML).toBe(cookieDisclaimerJSON.data.description);
    expect(getByTestId('buttonLabel').innerHTML).toBe(cookieDisclaimerJSON.data.cta[0].label);
});

test('Loads and dispay CookieDisclaimer props without url', () => {
    const {getByTestId} = render(<CookieDisclaimer {...cookieDisclaimerJSON} />);
    expect(getByTestId('cookieLink').innerHTML).toBeTruthy();
});

test('should hide if user click accepted disclaimer', () => {
    let disclaimerCookie = getCookie('LA_COOKIE_DISCLAIMER');
    expect(disclaimerCookie).not.toEqual('true');

    const {getByTestId} = render(<CookieDisclaimer {...cookieDisclaimerJSON} />);
    fireEvent.keyPress(getByTestId('laButton'), {key: 'Enter', code: 13, charCode: 13});
    disclaimerCookie = getCookie('LA_COOKIE_DISCLAIMER');
    expect(disclaimerCookie).toEqual('true');
});
