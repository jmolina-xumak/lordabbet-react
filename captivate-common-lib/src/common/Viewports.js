// import { useMediaQuery } from 'react-responsive';
import {useMediaQuery} from '@material-ui/core';

export const mobileView = () => {
    return useMediaQuery('(min-width: 320px) and (max-width: 800px)');
};

export const portraitView = () => {
    return useMediaQuery('(orientation : portrait)');
};

export const landscapeView = () => {
    return useMediaQuery('(orientation : landscape)');
};
