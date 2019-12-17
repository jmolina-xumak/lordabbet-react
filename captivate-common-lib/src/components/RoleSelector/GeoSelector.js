import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import Select, {components} from 'react-select';
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import Flag from './Flag';

/**
 * @visibleName GeoSelector
 */

const cleanseForOptions = (data) => {
    return data && data.map((country) => {
        return {
            value: {
                name: country.name,
                roles: country.roles,
            },
            label: country.displayName,
        };
    });
};

const CustomDropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <ArrowDropDownSharpIcon />
        </components.DropdownIndicator>
    );
};

const CustomMenuList = (props) => {
    return (
        <div style={{height: 140}}>
            <PerfectScrollbar>
                {props.children}
            </PerfectScrollbar>
        </div>
    );
};

const formatOptionLabel = ({value, label}) => (
    <div
        data-testid={`geoselector-option-${value}`}
        style={{display: 'flex', justifyContent: 'left', flexDirection: 'row'}}
    >
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <Flag country={value.name} label={label}/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            {label}
        </div>
    </div>
);

export const customStyles = {
    control: (base, state) => ({
        ...base,
        'backgroundColor': '#ffffff',
        'border': 'solid 1px #c5cacc',
        'borderRadius': 0,
        'height': 48,
        'minHeight': 48,
        'boxShadow': 0,
        'borderColor': state.isFocused ? '#0a855b' : base.borderColor,
        '&:hover': {
            borderColor: state.isFocused ? '#0a855b' : base.borderColor,
        },
    }),
    menuList: (base) => ({
        ...base,
        padding: 0,
    }),
    option: (base, state) => ({
        ...base,
        'fontFamily': 'Arial',
        'fontSize': 14,
        'fontWeight': 'normal',
        'fontStretch': 'normal',
        'fontStyle': 'normal',
        'lineHeight': 1.71,
        'letterSpacing': 0.14,
        'color': '#333333',
        'height': 48,
        'minHeight': 48,
        'paddingTop': 12,
        'paddingBottom': 12,
        'backgroundColor': (state.isFocused || state.isSelected) ? '#f9f9fa' : '#ffffff',
        '&:active': {
            backgroundColor: '#f9f9fa',
        },
    }),
    menu: (base) => ({
        ...base,
        margin: 0,
        border: 'solid 1px #c5cacc',
        borderRadius: 0,
        backgroundColor: '#ffffff',
    }),
    singleValue: (base) => ({
        ...base,
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.71,
        letterSpacing: 0.14,
        color: '#333333',
    }),
};

const GeoSelector = (props) => {
    const {data, defaultCountry} = props;

    const [selectValue, setSelectValue] = useState(() => {
        const selection = data && data.filter((country) => country.name === defaultCountry)[0];
        return {value: {
            name: selection.name,
            roles: selection.roles,
        },
        label: selection.displayName};
    });

    return (
        <Select
            menuIsOpen={props.menuIsOpen}
            value={selectValue}
            isSearchable={false}
            onChange={(val) => {
                setSelectValue(val);
                if (!!props.onChange) {
                    props.onChange(val);
                }
            }}
            formatOptionLabel={formatOptionLabel}
            options={cleanseForOptions(data)}
            styles={customStyles}
            components={{
                DropdownIndicator: CustomDropdownIndicator,
                IndicatorSeparator: null,
                Placeholder: '',
                MenuList: CustomMenuList,
            }}
        />
    );
};

GeoSelector.defaultProps = {
    menuIsOpen: undefined,
};

GeoSelector.propTypes = {
    onChange: PropTypes.func,
    menuIsOpen: PropTypes.bool,
    defaultCountry: PropTypes.string,
};

export default GeoSelector;
