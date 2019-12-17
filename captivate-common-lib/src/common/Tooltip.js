import React, {useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {Tooltip} from '@material-ui/core';

const arrowGenerator = (color) => {
    return {
        '&[x-placement*="bottom"] $arrow': {
            'top': 0,
            'left': 0,
            'marginTop': '-0.95em',
            'width': '2em',
            'height': '1em',
            '&::before': {
                borderWidth: '0 1em 1em 1em',
                borderColor: `transparent transparent ${color} transparent`,
            },
        },
        '&[x-placement*="top"] $arrow': {
            'bottom': 0,
            'left': 0,
            'marginBottom': '-0.95em',
            'width': '2em',
            'height': '1em',
            '&::before': {
                borderWidth: '1em 1em 0 1em',
                borderColor: `${color} transparent transparent transparent`,
            },
        },
        '&[x-placement*="right"] $arrow': {
            'left': 0,
            'marginLeft': '-0.95em',
            'height': '2em',
            'width': '1em',
            '&::before': {
                borderWidth: '1em 1em 1em 0',
                borderColor: `transparent ${color} transparent transparent`,
            },
        },
        '&[x-placement*="left"] $arrow': {
            'right': 0,
            'marginRight': '-0.95em',
            'height': '2em',
            'width': '1em',
            '&::before': {
                borderWidth: '1em 0 1em 1em',
                borderColor: `transparent transparent transparent ${color}`,
            },
        },
    };
};

const useStylesArrow = makeStyles(() => ({
    tooltip: {
        position: 'relative',
        backgroundColor: '#FFF',
        color: '#222222',
        boxShadow: '0 2px 8px 0 rgba(180, 183, 185, 0.3)',
        fontSize: 12,
        fontFamily: 'Arial',
        padding: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        letterSpacing: 'normal',
    },
    arrow: {
        'position': 'absolute',
        'fontSize': 6,
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        },
    },
    popper: arrowGenerator('#c5cacc'),
}));

export const ArrowTooltip = (props) => {
    const {arrow, ...classes} = useStylesArrow();
    const [arrowRef, setArrowRef] = useState(null);
    const {title} = props;

    return (
        <Tooltip
            classes={classes}
            placement="top"
            PopperProps={{
                popperOptions: {
                    disablePortal: true,
                    modifiers: {
                        arrow: {
                            enabled: Boolean(arrowRef),
                            element: arrowRef,
                        },
                    },
                },

            }}
            data-testid="tooltip"
            {...props}
            title={
                <>
                    {title}
                    <span className={arrow} ref={setArrowRef} />
                </>
            }
        />
    );
};

export const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
        minWidth: 240,
        width: 'auto',
        height: 80,
        padding: 16,
        marginBottom: 10,
        borderRadius: 5,
    },
}))(Tooltip);
