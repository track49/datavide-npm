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
const KEY      = 'YOUR_KEY_HERE';

async function bitcoinPrice() {
  let options = {
                  'category': 'crypto',
                  'entity'  : 'bitcoin',
                  'period'  : 'last',
                  'apiKey'  : KEY
                };

  try {
    // get bitcoin's last(most recent) data entry.
    let bitcoin = await datavide.getCompanies(options);
    // console log the value from data[0](most recent data entry)
    console.log(bitcoin.data[0].value);
  } catch(err) {
    // catch and print error
    console.log(err);
  }
}

bitcoinPrice();
```
Using Node v8+ you can run the above example with `node file.js`

#### Example using .then promise notation
```js
const datavide = require('datavide');
const KEY      = 'YOUR_KEY_HERE';

function bitcoinPrice() {
  let options = {
                  'category': 'crypto',
                  'entity'  : 'bitcoin',
                  'period'  : 'last',
                  'apiKey'  : KEY
                };

  datavide.getFinance(options)
    .then((bitcoin) => {
      // On resolve print bitcoins value
      console.log(bitcoin.data[0].value);
    }, (err) => {
      // On reject print error
      console.log(err);
    });
}

bitcoinPrice();
```

#### Example using a callback
```js
const datavide = require('datavide');
const KEY      = 'YOUR_KEY_HERE';

function bitcoinPrice() {
  let options = {
                  'category': 'crypto',
                  'entity'  : 'bitcoin',
                  'period'  : 'last',
                  'apiKey'  : KEY
                };

  datavide.getFinance(options, function(err, bitcoin) {

    // catch error using 'error-first-pattern'
    if (err) {
      console.log('Error occured');
      console.log(err);
      return;
    }

    // on success print the value
    console.log(bitcoin.data[0].value);
  })
}

bitcoinPrice();
```
Using Node v6+ you can run the two above examples with `node file.js`

## Available functions
For data examples check out the datavide documentation: <http://www.datavide.com/docs>
#### Parameters
- category - the category of the data you want. (eg. 'equity')
- entity   - the specific entity you want data for. (eg. 'aapl')
- period   - the amount of historical data you want. (eg. 'week')

#### Functions
- **getFinance**(*options, callback*)
- **getEconomic**(*options, callback*)

## People

  The current lead maintainer is [Jack Isherwood]

## License

  [ISC](LICENSE.md)
