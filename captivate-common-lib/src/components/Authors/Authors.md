- Author component will appear on Article pages in the header section as well as in the bottom section

<br/>

##### Design Links :

- [Author Design](https://zpl.io/aXXN8jx 'Zeplin Design link')
- [Author Block Design](https://zpl.io/aRXdEMn 'Zeplin Design link')

<br/>

##### **Header section Single Author**

```jsx
import { Grid, CssBaseline } from '@material-ui/core';

const singleAuthorsData = {
  data: {
    isAuthorBlock: false,
    authors: [
      {
        name: 'Brian foerster',
        designation: 'Director, Retirement Solutions',
        qualification: 'QKA, QPA, QPFC, TGPC',
        profileUrl: '',
        imageUrl:
          'https://www.lordabbett.com/content/lordabbett/en/global/biographies/brian-foerster/_jcr_content/profileImage.img.jpg/1549483433334.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
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

<Authors {...singleAuthorsData} />;
```

##### **Header section Multiple Author**

```jsx
import { Grid, CssBaseline } from '@material-ui/core';

const multipleAuthorsData = {
  data: {
    isAuthorBlock: false,
    authors: [
      {
        name: 'Brian Foerster',
        designation: 'Director, Retirement Solutions',
        qualification: 'QKA, QPA, QPFC, TGPC',
        profileUrl: '',
        imageUrl:
          'https://www.lordabbett.com/content/lordabbett/en/global/biographies/brian-foerster/_jcr_content/profileImage.img.jpg/1549483433334.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        name: 'John J. Morton',
        designation: 'Portfolio Manager',
        qualification: 'CFA',
        profileUrl: '',
        imageUrl:
          'https://www.lordabbett.com/content/lordabbett/en/global/biographies/john-morton/_jcr_content/profileImage.img.jpg/1549484820222.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        name: 'Stephen Hillebrecht',
        designation: 'Fixed Income Product Strategist',
        qualification: 'CFA',
        profileUrl: '',
        imageUrl:
          'https://www.lordabbett.com/content/lordabbett/en/global/biographies/stephen-hillebrecht/_jcr_content/profileImage.img.jpg/1549483318374.jpg.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        name: 'Trent Houston',
        designation: 'Product Strategist',
        qualification: '',
        profileUrl: '',
        imageUrl:
          'https://www.lordabbett.com/content/lordabbett/en/global/biographies/trent-houston/_jcr_content/profileImage.img.jpg/1549483279623.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        name: 'Daniel S. Solender',
        designation: 'Partner & Director',
        qualification: 'CFA',
        profileUrl: '',
        imageUrl:
          'https://www.lordabbett.com/content/lordabbett/en/global/biographies/daniel-solender/_jcr_content/profileImage.img.jpg/1549312737605.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
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

<Grid container>
  <Grid item xs={12} sm={12} md={6} lg={5} xl={5} style={{ marginTop: 30 }}>
    <Authors {...multipleAuthorsData} />
  </Grid>
</Grid>;
```

##### **Bottom section Signle Author**

```jsx
import { Grid, CssBaseline } from '@material-ui/core';

const singleAuthorsBlockData = {
  data: {
    isAuthorBlock: true,
    authors: [
      {
        name: 'Brian foerster',
        designation: 'Director, Retirement Solutions',
        qualification: 'QKA, QPA, QPFC, TGPC',
        profileUrl: '',
        imageUrl:
          'https://www.lordabbett.com/content/lordabbett/en/global/biographies/brian-foerster/_jcr_content/profileImage.img.jpg/1549483433334.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
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

<Grid container>
  <Grid item xs={12} sm={12} md={6} lg={5} xl={5} style={{ marginTop: 10 }}>
    <Authors {...singleAuthorsBlockData} />
  </Grid>
</Grid>;
```

##### **Bottom section Multiple Author**

```jsx
import { Grid, CssBaseline } from '@material-ui/core';

const multipleAuthorsBlockData = {
  data: {
    isAuthorBlock: true,
    authors: [
      {
        name: 'Brian Foerster',
        designation: 'Director, Retirement Solutions',
        qualification: 'QKA, QPA, QPFC, TGPC',
        profileUrl: '',
        imageUrl:
          'https://www.lordabbett.com/content/lordabbett/en/global/biographies/brian-foerster/_jcr_content/profileImage.img.jpg/1549483433334.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        name: 'John J. Morton',
        designation: 'Portfolio Manager',
        qualification: 'CFA',
        profileUrl: '',
        imageUrl:
          'https://www.lordabbett.com/content/lordabbett/en/global/biographies/john-morton/_jcr_content/profileImage.img.jpg/1549484820222.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        name: 'Stephen Hillebrecht',
        designation: 'Fixed Income Product Strategist',
        qualification: 'CFA',
        profileUrl: '',
        imageUrl:
          'https://www.lordabbett.com/content/lordabbett/en/global/biographies/stephen-hillebrecht/_jcr_content/profileImage.img.jpg/1549483318374.jpg.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        name: 'Trent Houston',
        designation: 'Product Strategist',
        qualification: '',
        profileUrl: '',
        imageUrl:
          'https://www.lordabbett.com/content/lordabbett/en/global/biographies/trent-houston/_jcr_content/profileImage.img.jpg/1549483279623.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        name: 'Daniel S. Solender',
        designation: 'Partner & Director',
        qualification: 'CFA',
        profileUrl: '',
        imageUrl:
          'https://www.lordabbett.com/content/lordabbett/en/global/biographies/daniel-solender/_jcr_content/profileImage.img.jpg/1549312737605.jpg',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
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

<Grid container>
  <Grid item xs={12} sm={12} md={6} lg={5} xl={5} style={{ marginTop: 10 }}>
    <Authors {...multipleAuthorsBlockData} />
  </Grid>
</Grid>;
```
