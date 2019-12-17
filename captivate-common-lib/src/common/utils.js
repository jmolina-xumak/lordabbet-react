export const getCookie = (cookieName) => {
    let value = document.cookie
        .split(';')
        .filter((item) => item.includes(cookieName))[0];
    if (value !== undefined) {
        value = value.split('=')[1];
    }
    return value;
};

export const setCookie = (cookiName, value, options) => {
    document.cookie = `${cookiName}=${value};${getOptions(options)}`;
};

const getOptions = (options) => {
    let optionValues = '';
    if (options && !!options.maxAge) {
        const date = new Date();
        date.setTime(date.getTime() + (options.maxAge * 24 * 60 * 60 * 1000));
        optionValues = `expires=${date.toUTCString()}`;
    }
    optionValues += `path=${options && !!options.path ? options.path : '/'}`;
    return optionValues;
};

export const deleteCookie = (cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
