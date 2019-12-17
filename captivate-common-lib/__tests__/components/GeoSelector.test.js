import React from 'react';
import {render} from '@testing-library/react';
import {roleSelection} from '../../public/data/roleSelectionJSON';

import GeoSelector, {customStyles} from '../../src/components/RoleSelector/GeoSelector';

test('Loads GeoSelector Options is proper length', () => {
    const {getAllByTestId} = render(<GeoSelector menuIsOpen={true} data={roleSelection.data.countries} defaultCountry={'united_states'}/>);
    expect(getAllByTestId('geoselector-option-', {exact: false}).length).toEqual(23);
});

test('Properly provide styles based on react-select state in control', () => {
    const func = customStyles.control;
    let style = func({borderColor: 'borderColor'}, {isFocused: false});
    expect(style.borderColor).toEqual('borderColor');
    expect(style['&:hover'].borderColor).toEqual('borderColor');
    style = func({borderColor: 'borderColor'}, {isFocused: true});
    expect(style.borderColor).not.toEqual('borderColor');
    expect(style['&:hover'].borderColor).not.toEqual('borderColor');
});

test('Properly provide styles based on react-select state in menuList', () => {
    const func = customStyles.menuList;
    const style = func({unique: 'unique'});
    expect(style.unique).toEqual('unique');
});

