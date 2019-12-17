const path = require('path');

module.exports = {
    require: [
        'babel-polyfill',
        path.join(__dirname, './public/styles/fonts.css'),
        path.join(__dirname, './public/styles/normalize.css'),
    ],
    title: 'Project Captivate',
    theme: {
        color: {
            baseBackground: '#fdfdfc',
            link: '#000',
            linkHover: '#90a7bf',
            border: '#e0d2de',
            sidebarBackground: '#d8d8d8',
        },
        fontFamily: {
            base: ['DinProRegular', 'DinProBold'],
        },
        maxWidth: 1500,
        sidebarWidth: 250,
    },
    styles: {
        Playground: {
            preview: {
                paddingLeft: 0,
                paddingRight: 0,
                borderWidth: [[0, 0, 1, 0]],
                borderRadius: 0,
            },
        },
        Markdown: {
            pre: {
                border: 0,
                background: 'none',
            },
            code: {
                fontSize: 14,
            },
        },
        Logo: {
            logo: {
                color: '#FFF',
                fontSize: 24,
                fontWeight: 'bold',
                fontFamily: 'DinProBold',
            },
        },
        StyleGuide: {
            footer: {
                display: 'none',
            },
        },
        ComponentsList: {
            item: {
                padding: '12px 0',
            },
        },
        ReactComponent: {
            tabButtons: {
                marginBottom: 12,
            },
        },
        Table: {
            cellHeading: {
                width: '18%',
            },
            cell: {
                width: '18%',
            },
        },
    },
    sections: [
        {
            name: 'Introduction',
            content: 'documents/introduction.md',
        },
        {
            name: 'Components Demo',
            external: true,
            href:
                'https://pages.github.lordabbett.com/cborkar/componentsLibrary/dist/workshop',
        },
        {
            name: 'Global Components',
            content: 'documents/globalUi.md',
            components: [
                'src/common/GenericImage/index.js',
                'src/common/LaButton/index.js',
                'src/common/Typography/index.js'
            ],
            exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
            usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
            sectionDepth: 1,
        },
        {
            name: 'Components',
            content: 'documents/ui.md',
            components: ['src/components/**/index.js'],
            exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
            usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
            sectionDepth: 1,
        },
    ],
    styleguideDir: 'dist/storefront',
    pagePerSection: true,
    sortProps: (props) => props,
    exampleMode: 'collapse',
    printBuildInstructions(config) {
        console.log(
            `Style guide published to ${config.styleguideDir}. Something else interesting.`
        );
    },
};
