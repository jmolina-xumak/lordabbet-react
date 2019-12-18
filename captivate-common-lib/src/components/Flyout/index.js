import React from 'react';
import {ThemeProvider} from '@material-ui/styles';

import theme from '../../public/assets/theme';
import {FlyoutContainer, ErrorHandler, WarningHandler} from '../../common';
import {FlyoutAction, FlyoutInfo} from '../../common/FlyoutContent';

const Flyout = (props) => {
    const {data, error, warning} = props;

    return (
        <ThemeProvider theme={theme}>
            {error && error.message !== undefined && <ErrorHandler {...error}/>}
            {warning && warning.warningMessage !== undefined && <WarningHandler {...warning}/>}
            {data !== undefined && (
                <FlyoutContainer>
                    {data.type === 'info' &&
                    <FlyoutInfo
                        {...data}
                    />}
                    {data.type === 'action' &&
                        <FlyoutAction
                            title={data.title}
                            description={data.description}
                            cta={data.cta}
                        />
                    }
                </FlyoutContainer>
            )}
        </ThemeProvider>
    );
};

export default Flyout;
