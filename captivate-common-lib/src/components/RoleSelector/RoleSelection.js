import React from 'react';
import * as PropTypes from 'prop-types';
import * as ReactGA from 'react-ga';
import {Grid} from '@material-ui/core';

import {GA_KEY, GA_PROD_KEY} from '../../public/constants';
import {mobileView} from '../../common';

const RoleSelection = (props) => {
    const {classes, roles, setShowRoleSelector, setCookie} = props;
    ReactGA.initialize(window.isProd ? GA_PROD_KEY : GA_KEY, {
        testMode: process.env.NODE_ENV === 'test',
    });
    ReactGA.pageview(window.location.pathname + window.location.search);

    const roleSelected = (role) => {
        setShowRoleSelector(false);
        setCookie('LA_ROLETYPE', role.name, {
            path: '/',
            maxAge: 30 * 24 * 60 * 60,
        });
        ReactGA.event({
            category: role.name,
            action: 'Role Selected',
            label: 'User clicked the role button',
        });
        if (role.url !== undefined && role.url !== '') {
            window.location.assign(window.location.origin + role.url);
        }
    };

    const isMobile = mobileView();

    return (
        <Grid item xs={12} className={`${isMobile ? classes.selectionContainerMobile : ''}`}>
            {roles &&
                roles.map((role, i) => (
                    <>
                        <Grid
                            container
                            key={`role-${i}`}
                            className={`${classes.selectionBox} ${isMobile ? classes.selectionBoxMobile : ''}`}
                            onClick={() => roleSelected(role)}
                            onKeyPress={() => roleSelected(role)}
                            role="button"
                            tabIndex="0"
                            aria-label="role selector button"
                            data-testid={`roleSelectionContainer-${i}`}
                        >
                            <Grid item xs={11} className={`selector`} data-testid={`roleName-${i}`}>
                                {role.name}
                            </Grid>
                            <Grid item xs={1} className={classes.rightArrow} />
                        </Grid>
                        {isMobile && i<roles.length-1? (<hr
                            style={{
                                margin: '15.5px 16px 15.5px',
                                border: 'none',
                                height: 1,
                                color: '#c5cacc',
                                backgroundColor: '#c5cacc',
                            }}/>) : (null)}
                    </>
                ))}
        </Grid>
    );
};

RoleSelection.propTypes = {
    /** Role information  */
    roles: PropTypes.array,
    /** style classes  */
    classes: PropTypes.object,
    /** show role selector flag  */
    setShowRoleSelector: PropTypes.func,
    /** set cookie function  */
    setCookie: PropTypes.func,
};

export default RoleSelection;
