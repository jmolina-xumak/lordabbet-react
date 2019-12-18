##### **Object Fit : Fill**

```jsx
import { Grid } from '@material-ui/core';
import { genericImageData } from '../../public/data/genericImageJSON';

<Grid container style={{ padding: 16 }}>
  <Grid item xs={12}>
    <GenericImage {...genericImageData} />
  </Grid>
</Grid>;
```

##### **Object Fit : Contain**

```jsx
import { Grid } from '@material-ui/core';
import { genericImageDataContain } from '../../public/data/genericImageJSON';

<Grid container style={{ padding: 16 }}>
  <Grid item xs={12}>
    <GenericImage {...genericImageDataContain} />
  </Grid>
</Grid>;
```

##### **Object Fit : Cover**

```jsx
import { Grid } from '@material-ui/core';
import { genericImageDataCover } from '../../public/data/genericImageJSON';

<Grid container style={{ padding: 16 }}>
  <Grid item xs={12}>
    <GenericImage {...genericImageDataCover} />
  </Grid>
</Grid>;
```

##### **Object Fit : None**

```jsx
import { Grid } from '@material-ui/core';
import { genericImageDataNone } from '../../public/data/genericImageJSON';

<Grid container style={{ padding: 16 }}>
  <Grid item xs={12}>
    <GenericImage {...genericImageDataNone} />
  </Grid>
</Grid>;
```
