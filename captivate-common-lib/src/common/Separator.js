import React from 'react';
import * as PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';

const Separator = (props) => {
    const {data} = props;
    const {type, color} = data || {};

    return (
        <Grid
            container
            style={{width: '100%'}}
            data-test="separator-container"
        >
            <Grid
                item
                xs={12}
            >
                <hr
                    style={{
                        margin: '16px 0',
                        border: 'none',
                        height: type === 'heavy' ? 2 : 1,
                        color: !!color ? color: '#c5cacc',
                        backgroundColor: !!color ? color: '#c5cacc',
                    }}/>
            </Grid>
        </Grid>
    );
};

Separator.propTypes = {
    /** line type */
    type: PropTypes.string,
    /** line color */
    color: PropTypes.string,
};

Separator.defaultProps = {};

export default Separator;
