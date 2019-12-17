##### Design Links :

- [Promotional Block Design](https://zpl.io/ad1N8o7 'Zeplin Design link')

<br/>

##### **webinarPromotion**

```jsx
import { Grid } from '@material-ui/core';

const webinarPromotion = {
  data: {
    imageUrl:
      'https://www.lordabbett.com/content/dam/lordabbett/en/images/topics/Economy-US/Economy-Recession-Puzzle-shutterstock_333096830.jpg',
    iconAvailable: true,
    title: 'webinar: Fixed Income Insights',
    description:
      'Bearish market observers are once again expressing doubts about the health of the secular bull market',
    buttonLabel: 'Watch now',
    header: '',
    buttonUrl: '',
    promotionType: 'webinar' // webinar/socialTwitter/findRep/newsLetter/specialCollection
  },
  error: {
    message: undefined,
    code: undefined
  },
  warning: {
    warningMessage: undefined
  }
};

<Grid container>
  <Grid item xs={12} lg={2} xl={2}>
    <PromotionalBlock {...webinarPromotion} />
  </Grid>
</Grid>;
```

##### **socialTwitterPromotion**

```jsx
import { Grid } from '@material-ui/core';

const socialTwitterPromotion = {
  data: {
    imageUrl:
      'https://www.lordabbett.com/content/dam/lordabbett/en/images/topics/Economy-US/Economy-Recession-Puzzle-shutterstock_333096830.jpg',
    title: 'Follow Us on Twitter',
    iconAvailable: true,
    description:
      'Follow Lord Abbett on Twitter and get daily updates fresh in  your newsfeed.',
    buttonLabel: 'Follow Us',
    buttonUrl: '',
    promotionType: 'socialTwitter' // webinar/socialTwitter/findRep/newsLetter/specialCollection
  },
  error: {
    message: undefined,
    code: undefined
  },
  warning: {
    warningMessage: undefined
  }
};

<Grid container>
  <Grid item xs={12} lg={2} xl={2}>
    <PromotionalBlock {...socialTwitterPromotion} />
  </Grid>
</Grid>;
```

##### **findRepPromotion**

```jsx
import { Grid } from '@material-ui/core';

const findRepPromotion = {
  data: {
    imageUrl:
      'https://www.lordabbett.com/content/dam/lordabbett/en/images/topics/Economy-US/Economy-Recession-Puzzle-shutterstock_333096830.jpg',
    title: 'Connect with Your Rep Today',
    iconAvailable: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui et curabitur vel, aliquet nibh elementum imperdiet et. ',
    buttonLabel: 'FIND YOUR REP',
    buttonUrl: '',
    promotionType: 'findRep' // webinar/socialTwitter/findRep/newsLetter/specialCollection
  },
  error: {
    message: undefined,
    code: undefined
  },
  warning: {
    warningMessage: undefined
  }
};

<Grid container>
  <Grid item xs={12} lg={2} xl={2}>
    <PromotionalBlock {...findRepPromotion} />
  </Grid>
</Grid>;
```

##### **newsLetterPromotion**

```jsx
import { Grid } from '@material-ui/core';

const newsLetterPromotion = {
  data: {
    imageUrl:
      'https://www.lordabbett.com/content/dam/lordabbett/en/images/topics/Economy-US/Economy-Recession-Puzzle-shutterstock_333096830.jpg',
    title: 'Get Our Weekly Insights Newsletter',
    iconAvailable: true,
    description:
      'Subscribe to our newsletter to receive the latest exclusive Lord Abbett coverage delivered to your inbox.',
    buttonLabel: 'SUBSCRIBE',
    buttonUrl: '',
    promotionType: 'newsLetter' // webinar/socialTwitter/findRep/newsLetter/specialCollection
  },
  error: {
    message: undefined,
    code: undefined
  },
  warning: {
    warningMessage: undefined
  }
};

<Grid container>
  <Grid item xs={12} lg={2} xl={2}>
    <PromotionalBlock {...newsLetterPromotion} />
  </Grid>
</Grid>;
```

##### **specialCollectionPromotion**

```jsx
import { Grid } from '@material-ui/core';

const specialCollectionPromotion = {
  data: {
    imageUrl:
      'https://www.lordabbett.com/content/dam/lordabbett/en/images/topics/Economy-US/Economy-Recession-Puzzle-shutterstock_333096830.jpg',
    title: 'Editors Choice: Summer 2019',
    iconAvailable: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, felis fusce id feugiat eu.',
    buttonLabel: 'explore collection',
    buttonUrl: '',
    header: 'special collection',
    promotionType: 'specialCollection' // webinar/socialTwitter/findRep/newsLetter/specialCollection
  },
  error: {
    message: undefined,
    code: undefined
  },
  warning: {
    warningMessage: undefined
  }
};

<Grid container>
  <Grid item xs={12} lg={2} xl={2}>
    <PromotionalBlock {...specialCollectionPromotion} />
  </Grid>
</Grid>;
```
