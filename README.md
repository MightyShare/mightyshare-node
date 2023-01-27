# MightyShare.io Social Share Image API

Sign up for an API key and secret at [MightyShare.io](https://MightyShare.io).

## Installation

```
npm install mightyshare
```

## Node.js Usage Example

```js
import mightyshare from 'mightyshare';

// API key from MightyShare.io
const mightyshare = mightyshare(API_KEY);

const options = {
  height: 630,
  width: 1200,
  template: 'standard-1',
  template_values: [
    {
      "name": "primary_color",
      "color": "#C18651"
    },
    {
      "name": "title",
      "text": "8 Stunning Beaches to Visit this Summer"
    },
    {
      "name": "background",
      "image_url": "https://images.unsplash.com/photo-1652953552047-d8fe57042a3a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800"
    },
    {
      "name": "logo",
      "image_url": "https://mightyshare.io/wp-content/uploads/2022/05/your-logo-mightyshare-1.png"
    }
  ]
}

const imageUrl = mightyshare.generateUrl(options);
console.log(imageUrl);
```
