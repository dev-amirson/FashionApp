## Demo
---
Deployment link will be placed later [Demo](https://github.com/awais0198/FashionApp).

## Requirements
---
For development, you will only need Node.js installed on your environement. And please use the appropriate Editorconfig plugin for your [Editor](https://editorconfig.org/) (not mandatory)

### Node

[Node](https://nodejs.org/en/) is really easy to install & now include [NPM](https://www.npmjs.com/). You should be able to run the following command after the installation procedure below.

```javascript
$ node --version
v12.10.0

$ npm --version
6.11.3
```

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in `/Applications/Utilities/Terminal.app`.

Please install [Homebrew](https://brew.sh/) if it's not already done with the following command.

```javascript
$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

```
If everything when fine, you should run

```javascript
brew install node

```


### Node installation on Linux

```javascript
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
```

## Install
---
```javascript
$ npm install
```

## Start & watch
---
```javascript
$ npm start
```
### Languages & tools
---
#### Templating
* [HTML](http://jade-lang.com/) for some structuring.
#### JavaScript
* [React](https://reactjs.org/) is used for UI.
* React Redux is used for application state management.
* Redux Thunk is used async dispatching of events.
#### CSS
* [Foundation](http://cssnext.putaindecode.io/) is used to write futureproof CSS for CSS vendor prefix under the hood).


## Notes
---
* I have implemented the product detail page with proper add to bag functionality.
* I have not used any library like jquery or lodash. Whereas jquery is not recommented in react as it directly affects Actual DOM but react is running on Virtual DOM.
* I have added quality in sample json that you provided.
* I have added the contact us page with chat option whereas chat is only available between 9am to 5pm.
* I have deployed it on [Heroku](https://daily-fashion.herokuapp.com/).
* I have added colors with quantity in each sizes to make the case more realistic.
* This is the sample json:

```json
product: {
    id: 890,
    sizes: [
      {
        id: 123, name: 'Small', abbreviation: 'S',
        colors: [
          { name: 'red', quantity: 57 },
          { name: 'black', quantity: 7 }
        ]
      },
      {
        id: 234, name: 'Medium', abbreviation: 'M',
        colors: [
          { name: 'black', quantity: 27 },
          { name: 'blue', quantity: 17 }
        ]
      },
    ],
    colors: [
      'black', 'red', 'orange', 'blue'
    ],
    name: 'The Special Pantsuit',
    description: 'This is the coolest pantsuit you"ve ever seen. Fits like a dream. Wear this everywhere, and nowhere.',
    bullets: [
      'So baggy and yet hugs all the right places',
      'Big hidden pockets',
      'Front zipper so you can zip yourself in',
      'Silk material, reinforced stitching'
    ],
    images: [
      { order: 0, url: '../assets/jumpsuit-1.jpg' },
      { order: 1, url: '../assets/jumpsuit-2.jpg' },
      { order: 2, url: '../assets/jumpsuit-3.jpg' },
      { order: 3, url: '../assets/jumpsuit-4.jpg' },
      { order: 4, url: '../assets/jumpsuit-5.jpg' }
    ],
    materials: ['silk'],
    price: 12000,
    sizeInfo: 'These are sized a little small. We advise ordering the next size up from what you normally wear.',
    materialInfo: '100% silk which feels very nice. These are meant to be warn slightly baggy so that they are comfortable. Zipper front with rolled up sleeves. Hip pockets on the front.'
  }

```
