import React from 'react';
import * as PropTypes from 'prop-types';
import {Grid, Button} from '@material-ui/core';

import useStyles from './styles';

/**
 * @visibleName Button
 */
const LaButton = (props) => {
    const {isoutlined, islink, label, Icon, iconcolor, size, style} = props;
    const classes = useStyles();
    const buttonClass = () => {
        if (size === 'small') {
            return isoutlined ?
                `${classes.outlined} ${classes.outlinedSmall}` :
                islink ?
                    `${classes.link} ${classes.linkSmall}`:
                    `${classes.contained} ${classes.containedSmall}`;
        } else {
            return isoutlined ?
                classes.outlined :
                islink ?
                    classes.link :
                    classes.contained;
        }
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <Button
                    size={size}
                    className={buttonClass()}
                    variant={
                        isoutlined ?
                            'outlined' :
                            islink ?
                                '' :
                                'contained'
                    }
                    startIcon={!!Icon && <Icon htmlColor={iconcolor} />}
                    {...props}
                    style={style}
                    data-testid='laButton'
                >
                    <span className={!!Icon && (size === 'small' ? classes.labelSmall : classes.label)} data-testid="buttonLabel">{label}</span>
                </Button>
            </Grid>
        </Grid>
    );
};

LaButton.propTypes = {
    size: PropTypes.string,
    style: PropTypes.object,
};

LaButton.defaultProps = {
    size: 'large',
};

export default LaButton;

