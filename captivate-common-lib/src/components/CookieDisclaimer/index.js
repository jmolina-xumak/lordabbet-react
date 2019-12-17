import React, {useState} from 'react';

import useStyles from './styles';
import {FlyoutContainer, setCookie, getCookie} from '../../common';
import {FlyoutAction} from '../../common';

const CookieDisclaimer = (props) => {
    const {data} = props;
    const classes = useStyles();
    const [showDisclaimer, setShowDisclaimer] = useState(() => {
        return getCookie('LA_COOKIE_DISCLAIMER') === undefined;
    });
    const setDisclaimerCookie = () => {
        setCookie('LA_COOKIE_DISCLAIMER', true, {
            path: '/',
            maxAge: 30 * 24 * 60 * 60,
        });
        setShowDisclaimer(false);
    };
    !!data.cta && (data.cta[0].callback = setDisclaimerCookie);

    const descriptionContent = () => {
        return !!data.disclaimerUrl ? <>
            {data.description}
            <a className={classes.link} href={data.disclaimerUrl} target="new" data-testid="cookieLink">Learn More</a>
        </> : data.description;
    };

    return (
        <>
            {showDisclaimer &&
            <FlyoutContainer>
                <FlyoutAction
                    description={descriptionContent()}
                    cta={data.cta}
                />
            </FlyoutContainer>
            }
        </>
    );
};

export default CookieDisclaimer;
