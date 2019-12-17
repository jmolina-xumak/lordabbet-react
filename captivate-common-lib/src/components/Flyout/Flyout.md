## `RecommendedForYou`

##### Design Links :

- [Fly Out Designs](https://zpl.io/25oDLJn 'Zeplin Design link')

<br/>

##### **Usage when showing breaking news**

```jsx
import { Grid } from '@material-ui/core';

const flyoutInfo = {
  data: {
    type: 'info',
    title:
      'Bank Loans Have Been Looking More Attractive to High-Yield Investors',
    description:
      'Historically, bank loans have offered high income with very little duration and historically attractive risk-adjust',
    header: 'BREAKING NEWS',
    category: 'Podcast',
    date: 'September 2, 2019',
    author: 'Michael Felz',
    cta: [
      {
        label: 'Read More',
        type: 'link',
        url: ''
      }
    ]
  },
  error: {
    message: undefined,
    code: undefined
  },
  warning: {
    warningMessage: undefined
  }
};

<Grid container style={{ padding: 16 }}>
  <Flyout {...flyoutInfo} />
</Grid>;
```

##### **Usage when showing a defined call to action**

```jsx
export const flyoutActionData = {
  data: {
    type: 'action',
    title: 'Take Our Survey',
    description:
      'Help us improve the way you experience Lord Abbett and our website by taking our short seven question survey.',
    cta: [
      {
        label: 'TAKE THE SURVEY',
        type: 'contained',
        url: ''
      },
      {
        label: 'not now',
        type: 'outlined',
        url: ''
      }
    ]
  },
  error: {
    message: undefined,
    code: undefined
  },
  warning: {
    warningMessage: undefined
  }
};

<Flyout {...flyoutAction} />;
```
