import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';

import useStyles from './styles';
import theme from '../../public/assets/theme';
import RoleSelection from './RoleSelection';

import GeoSelector from './GeoSelector';
import {mobileView, ErrorHandler, WarningHandler, getCookie, setCookie} from '../../common';

/*
 * RoleSelector Component
 * */
const RoleSelector = (props) => {
    const {data, error, warning} = props;
    const {header, subHeader, legalDisclosure, countries, defaultCountry} = data || {};
    const classes = useStyles();
    const isMobile = mobileView();

    const [showRoleSelector, setShowRoleSelector] = useState(() => {
        let showOverlay = true;
        const knownUserCookie = getCookie('fulfillmentCenterRRID');
        const laInternalCookie = getCookie('IS_LA_INTERNAL');
        const roleCookie = getCookie('LA_ROLETYPE');

        if (
            roleCookie !== undefined ||
            window.location.search.includes('et_rid') ||
            knownUserCookie !== undefined ||
            laInternalCookie === 'TRUE'
        ) {
            showOverlay = false;
        }
        return showOverlay;
    });

    const [roles, setRoles] = useState(() => {
        return countries && countries.filter((country) => country.name === defaultCountry)[0].roles;
    });

    return (
        <ThemeProvider theme={theme}>
            {error && error.message !== undefined && <ErrorHandler {...error}/>}
            {warning && warning.warningMessage !== undefined && <WarningHandler {...warning}/>}
            {data !== undefined && showRoleSelector && (
                <Grid
                    container
                    data-testid="gridContainer"
                    className={classes.overlay}
                    justify="center"
                >
                    <Grid
                        item
                        xs={12}
                        sm={8}
                        md={6}
                        lg={4}
                        xl={4}
                        className={classes.container}
                    >
                        <Grid container>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                                className={classes.header}
                                data-testid="roleHeader"
                            >
                                {header && header}
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                                className={classes.subHeader}
                            >
                                {'Please select your location.'}
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                                className={`${classes.geoSelector} ${isMobile ? classes.geoSelectorMobile : ''}`}
                            >
                                {countries && Object.keys(countries).length > 0 && (
                                    <GeoSelector
                                        onChange={(val) => {
                                            setRoles(val.value.roles);
                                        }}
                                        data={countries}
                                        defaultCountry={defaultCountry}
                                    />
                                )}
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                                className={classes.subHeader}
                                data-testid="roleSubheader"
                            >
                                {subHeader && subHeader}
                            </Grid>
                        </Grid>
                        {roles && roles.length > 0 && (
                            <RoleSelection
                                classes={classes}
                                roles={roles}
                                setShowRoleSelector={setShowRoleSelector}
                                setCookie={setCookie}
                            />
                        )}
                    </Grid>
                </Grid>
            )}
        </ThemeProvider>
    );
};

RoleSelector.propTypes = {
    /** RoleSelector header */
    header: PropTypes.string,
    /** RoleSelector sub header */
    subHeader: PropTypes.string,
    /** role details */
    role: PropTypes.array,
    /** Legal disclosure */
    legalDisclosure: PropTypes.string,
    /** Role Selection by Country */
    countries: PropTypes.object,
    /** Default Selected Country */
    defaultCountry: PropTypes.string,
};

RoleSelector.defaultProps = {
    selected: 'united_states',
};

export default RoleSelector;
