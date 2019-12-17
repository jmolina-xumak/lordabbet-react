##### Design Links hfhfh :

- [Typography](https://zpl.io/a8R4dXE 'Zeplin Design link')

<br/>

##### **Buttons**

```jsx
import { Grid } from '@material-ui/core';

<Grid container style={{ padding: 16 }}>
  <Grid item xs={12} lg={2} xl={2} md={4} sm={4}>
    <div style={{ margin: '12px 0', fontWeight: 'bold' }}>
      Primary Button Large
    </div>
    <LaButton label="SUBMIT" />
  </Grid>
  <Grid item xs={12} lg={2} xl={2} md={4} sm={4}>
    <div style={{ margin: '12px 0', fontWeight: 'bold' }}>
      Outline LaButton Large
    </div>
    <LaButton label="SUBMIT" isoutlined />
  </Grid>
  <Grid item xs={12} lg={2} xl={2} md={4} sm={4}>
    <div style={{ margin: '12px 0', fontWeight: 'bold' }}>
      Text Button Large
    </div>
    <LaButton label="Read More" islink />
  </Grid>
  <Grid item xs={12}>
    <div style={{ marginTop: 30 }} />
  </Grid>
  <Grid item xs={12} lg={2} xl={2} md={4} sm={4}>
    <div style={{ margin: '12px 0', fontWeight: 'bold' }}>
      Primary Button Small
    </div>
    <LaButton label="SUBMIT" size="small" />
  </Grid>
  <Grid item xs={12} lg={2} xl={2} md={4} sm={4}>
    <div style={{ margin: '12px 0', fontWeight: 'bold' }}>
      Outline Button Small
    </div>
    <LaButton label="SUBMIT" isoutlined size="small" />
  </Grid>
  <Grid item xs={12} lg={2} xl={2} md={4} sm={4}>
    <div style={{ margin: '12px 0', fontWeight: 'bold' }}>
      Text Button Small
    </div>
    <LaButton label="Read More" islink size="small" />
  </Grid>
</Grid>;
```

##### **Icon Buttons**

```jsx
import { Grid } from '@material-ui/core';
import PlayArrowSharpIcon from '@material-ui/icons/PlayArrowSharp';
<Grid container style={{ padding: 16 }}>
  <Grid item xs={12} lg={2} xl={2} md={4} sm={4}>
    <div style={{ margin: '12px 0', fontWeight: 'bold' }}>
      Icon Button Large
    </div>
    <LaButton
      label="SUBMIT"
      isoutlined
      Icon={PlayArrowSharpIcon}
      iconcolor="#0a855b"
    />
  </Grid>
  <Grid item xs={12} lg={2} xl={2} md={4} sm={4}>
    <div style={{ margin: '12px 0', fontWeight: 'bold' }}>
      Icon Button Small
    </div>
    <LaButton
      label="SUBMIT"
      isoutlined
      Icon={PlayArrowSharpIcon}
      iconcolor="#0a855b"
      size="small"
    />
  </Grid>
</Grid>;
```
