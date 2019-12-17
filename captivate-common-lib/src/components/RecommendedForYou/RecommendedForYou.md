## `RecommendedForYou`

##### Design Links :

- [Recommended For You Design](https://zpl.io/VqnJRM4 'Zeplin Design link')
- [Recommended For You Design mobile](https://zpl.io/Vk7my6M 'Zeplin Design link')

<br/>

##### **Usage when allowing IDIO to inject content**

```jsx
<RecommendedForYou />
```

##### **User when injecting props manually**

```jsx
const recommandedData = {
  data: {
    title: 'Data Driven',
    articlesList: [
      {
        articleUrl:
          'https://www.lordabbett.com/en/perspectives/marketview/three-market-divergences-signaling-potential-opportunities.html',
        imageUrl:
          'https://patientengagementhit.com/images/site/features/rural_hospital_access.jpg',
        imageAlt: 'Lorem ipsum',
        type: 'Type',
        date: 'January 1, 1970',
        title: 'Lorem ipsum dolor sit amet',
        copy:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        timeToRead: '11:00'
      },
      {
        articleUrl:
          'https://www.lordabbett.com/en/perspectives/marketview/three-market-divergences-signaling-potential-opportunities.html',
        imageUrl:
          'https://patientengagementhit.com/images/site/features/rural_hospital_access.jpg',
        imageAlt: 'Lorem ipsum',
        type: 'Type',
        date: 'January 1, 1970',
        title: 'Lorem ipsum dolor sit amet',
        copy:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        timeToRead: '13:00'
      },
      {
        type: 'Type',
        date: 'January 1, 1971',
        title: 'Lorem ipsum dolor sit amet',
        articleUrl:
          'https://www.lordabbett.com/en/perspectives/marketview/three-market-divergences-signaling-potential-opportunities.html'
      },
      {
        type: 'Type',
        date: 'January 1, 1972',
        title: 'Lorem ipsum dolor sit amet',
        articleUrl:
          'https://www.lordabbett.com/en/perspectives/marketview/three-market-divergences-signaling-potential-opportunities.html'
      },
      {
        type: 'Type',
        date: 'January 1, 1973',
        title: 'Lorem ipsum dolor sit amet',
        articleUrl:
          'https://www.lordabbett.com/en/perspectives/marketview/three-market-divergences-signaling-potential-opportunities.html'
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

<RecommendedForYou {...recommandedData} />;
```
