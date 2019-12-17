import React from 'react';
import {render} from '@testing-library/react';

import FlyoutAction from '../../src/common/FlyoutContent/FlyoutAction';
import {flyoutActionData} from '../../public/data/flyoutJSON';

test('Loads FlyoutAction', () => {
    const {debug, getByTestId} = render(<FlyoutAction
        {...flyoutActionData.data}
    />);
});

test('Places title prop in the correct location', () => {
    const {debug, getByTestId} = render(<FlyoutAction
        {...flyoutActionData.data}
    />);
    expect(getByTestId("title").innerHTML).toEqual(flyoutActionData.data.title);
});

test('Places description prop in the correct location', () => {
    const {debug, getByTestId} = render(<FlyoutAction
        {...flyoutActionData.data}
    />);
    expect(getByTestId("description").innerHTML).toEqual(flyoutActionData.data.description);
});

test('Places positiveText prop in the correct location', () => {
    const {debug, getByText} = render(<FlyoutAction
        {...flyoutActionData.data}
    />);
    expect(getByText(flyoutActionData.data.cta[0].label).innerHTML).toEqual(flyoutActionData.data.cta[0].label);
});

test('Places negativeText prop in the correct location', () => {
    const {debug, getByText} = render(<FlyoutAction
        {...flyoutActionData.data}
    />);
    expect(getByText(flyoutActionData.data.cta[1].label).innerHTML).toEqual(flyoutActionData.data.cta[1].label);
});

test('Does not render negative button when negativeText is undefined', () => {
    const {debug, queryAllByTestId} = render(<FlyoutAction
        {...flyoutActionData.data}
    />);
    expect(queryAllByTestId("negative").length).toEqual(0);
});

