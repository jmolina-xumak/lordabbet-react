##### Design Links :

- [Role Selector Design](https://zpl.io/VqLeJ4Z 'Zeplin Design link')

<br/>

```jsx
import { Grid } from '@material-ui/core';

const shareUtilityData = {
  data: {
    articleSubject: 'Investments: What’s Ahead for the Fourth Quarter?',
    shareUrl:
      '/en/perspectives/marketview/investments-whats-ahead-fourth-quarter.html',
    pdfUrl: '',
    showLinkedin: true,
    showEmail: true,
    showDownload: true,
    showBookmark: false
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
  <Grid item xl={6} lg={6} xs={6}>
    <ShareUtility {...shareUtilityData} />
  </Grid>
</Grid>;
```
