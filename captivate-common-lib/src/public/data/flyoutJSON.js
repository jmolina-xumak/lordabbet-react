export const flyoutData = {
    data: {
        type: '',     // info, action
        title: '',
        description: '',
        header: '',
        category: '',
        date: '',
        author: '',
        cta: [{
            label: '',
            type: ''
        }, {
            label: '',
            type: ''
        }]
    },
    error: {
        message: undefined,
        code: undefined,
    },
    warning: {
        warningMessage: undefined,
    },
};

export const flyoutInfoData = {
    data: {
        type: 'info',     // info, action
        title: 'Bank Loans Have Been Looking More Attractive to High-Yield Investors',
        description: 'Historically, bank loans have offered high income with very little duration and historically attractive risk-adjust',
        header: 'BREAKING NEWS',
        category: 'Podcast',
        date: 'September 2, 2019',
        author: 'Michael Felz',
        cta: [{
            label: 'Read More',
            type: 'link',
            url: '/test.html'
        }]
    },
    error: {
        message: undefined,
        code: undefined,
    },
    warning: {
        warningMessage: undefined,
    },
};

export const flyoutActionData = {
    data: {
        type: 'action',     // info, action
        title: 'Take Our Survey',
        description: 'Help us improve the way you experience Lord Abbett and our website by taking our short seven question survey.',
        cta: [{
            label: 'TAKE THE SURVEY',
            type: 'contained',
            url: '',
        }, {
            label: 'not now',
            type: 'outlined',
            url: ''
        }]
    },
    error: {
        message: undefined,
        code: undefined,
    },
    warning: {
        warningMessage: undefined,
    },
};

export const errorData = {
    data: {},
    error: {
        message: 'error in the component',
        code: '404',
    },
    warning: {
        warningMessage: 'warning in the component',
    },
};