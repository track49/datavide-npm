# d&auml;tavide - Official d&auml;tavide node package

## The best way to interface with the d&auml;tavide API
#### What is d&auml;tavide?
We are a data aggregator with a focus on politics, sports, finance and sentiment analysis across all media.

At dätavide we collect data from hundreds of thousands of sources and then refine, classify and segment everything into categories and vertically specific datasets. Our goal to is make it easier for companies, partners and developers to integrate, enhance and make use of data in their own applications.
#### Here is a brief overview of our API and datasets:
- Thousands of live and historical datasets for markets, equities, commodities, bonds and currencies.
- Analysis, sentiment and issue tracking for thousands of national, regional and local politicians and parties.
- Realtime tracking of mentions, sentiment and opinion on thousands of public companies, products and their executives
- Hundreds of thousands of public figures including celebrities, executives, athletes and politicians tracked for mentions, sentiment, opinion and trends.
- Datasets for every major league, player, team and stories captured up to the minute.
- Realtime sports stats, boxscores, standings and media.
- Thousands of historical and live topics, threads, opinions and memes with the greatest media share and attention.
- A restful API with consistent, responsive and platform agnotistic JSON response types.

## Get started
#### Get an API key
Signup and get your free API key here: <http://www.datavide.com/signup>
#### Install the d&auml;tavide package with
```bash

$ npm install datavide --save
```

#### Example using async and await
```js
const datavide = require('datavide');

async function bitcoin() {
  let options = {
                  'category': 'crypto',
                  'entity'  : 'bitcoin',
                  'period'  : 'last',
                  'apiKey'  : 'YOUR_KEY_HERE'
                };

  try {
    // get bitcoin's last(most recent) data entry.
    let bitcoin = await datavide.getFinance(options);
    // print data[0](most recent data entry)
    console.log(bitcoin.data[0]);
  } catch(err) {
    // catch and print error
    console.log(err);
  }
}

bitcoin();
```
Using Node v7+ you can run the above example with `node file.js`

#### Example using .then promise notation
```js
const datavide = require('datavide');

function bitcoin() {
  var options = {
                  'category': 'crypto',
                  'entity'  : 'bitcoin',
                  'period'  : 'last',
                  'apiKey'  : 'YOUR_KEY_HERE'
                };

  datavide.getFinance(options)
          .then((bitcoin) => {
            // On resolve print bitcoins most recent entry
            console.log(bitcoin.data[0]);
          }, (err) => {
            // On reject print error
            console.log(err);
          });
}

bitcoin();
```

#### Example using a callback
```js
const datavide = require('datavide');

function bitcoin() {
  var options = {
                  'category': 'crypto',
                  'entity'  : 'bitcoin',
                  'period'  : 'last',
                  'apiKey'  : 'YOUR_KEY_HERE'
                };

  datavide.getFinance(options, function(err, bitcoin) {

    // catch error using 'error-first-pattern'
    if (err) {
      console.log('Error occured');
      console.log(err);
      return;
    }

    // on success print the most recent entry
    console.log(bitcoin.data[0]);
  })
}

bitcoin();
```
Using Node v4+ you can run the two above examples with `node file.js`

## Documentation
  See full documentation at: <http://www.datavide.com/docs/libraries>

## People
  The current lead maintainer is [Jack Isherwood]

## License
  [MIT](LICENSE)
