- This role selector component will appear on home page for unknown user.
- On self selection, this would set 'roleType'cookie with selected role as a values.
- Home page will not display this role selector for

  1. Known user
  2. Unknown user who have selected role earlier (roleType cookie is available in browser session)
  3. Lord Abbett internal user

##### Design Links :

- [Role Selector Design](https://zpl.io/VqLeJ4Z 'Zeplin Design link')
- [Role Selector Design var 1](https://zpl.io/aNz8QvN 'Zeplin Design link')
- [Role Selector Design var 2](https://zpl.io/2Zn1N0L 'Zeplin Design link')
- [Role Selector Design mobile](https://zpl.io/aRG8pkz 'Zeplin Design link')

<br/>

```jsx
const roleSelection = {
  data: {
    header: 'Welcome to lord abbett',
    subHeader:
      'Please select your role so we can better personalize your experience.',
    defaultCountry: 'united_states',
    countries: [
      {
        name: 'austria',
        displayName: 'Austria',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          },
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'switzerland',
        displayName: 'Switzerland',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'chile',
        displayName: 'Chile',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'colombia',
        displayName: 'Colombia',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'germany',
        displayName: 'Germany',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'denmark',
        displayName: 'Denmark',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'spain',
        displayName: 'Spain',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'finland',
        displayName: 'Finland',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'france',
        displayName: 'France',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'united_kingdom',
        displayName: 'United Kingdom',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'hong_kong',
        displayName: 'Hong Kong',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'ireland',
        displayName: 'Ireland',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'italy',
        displayName: 'Italy',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'japan',
        displayName: 'Japan',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'luxembourg',
        displayName: 'Luxembourg',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'netherlands',
        displayName: 'Netherlands',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'norway',
        displayName: 'Norway',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'peru',
        displayName: 'Peru',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'sweden',
        displayName: 'Sweden',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'singapore',
        displayName: 'Singapore',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      },
      {
        name: 'united_states',
        displayName: 'United States',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: '/test.html'
          },
          {
            value: 'financial_advisor_2',
            name: 'Financial Advisor 2',
            url: '/test.html'
          },
          {
            value: 'financial_advisor_3',
            name: 'Financial Advisor 3',
            url: '/test.html'
          },
          {
            value: 'financial_advisor_4',
            name: 'Financial Advisor 4',
            url: '/test.html'
          }
        ]
      },
      {
        name: 'uruguay',
        displayName: 'Uruguay',
        roles: [
          {
            value: 'financial_advisor',
            name: 'Financial Advisor',
            url: undefined
          }
        ]
      }
    ],
    legalDisclosure:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec pharetra purus, nec dapibus velit. Sed vel erat nec lorem laoreet ornare. Nullam vulputate dapibus consectetur. Suspendisse convallis sit amet mauris sed cursus. Aliquam risus turpis, mattis nec consectetur nec, auctor ut lacus.'
  },
  error: {
    message: undefined,
    code: undefined
  },
  warning: {
    warningMessage: undefined
  }
};

<RoleSelector {...roleSelection} />;
```
