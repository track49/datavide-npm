"use strict"

const utils = require("./utils.js")

class Usage {

  constructor(apikey) {
    this.apikey = apikey
  }

  get(cb) {
    return utils.getDatavideApi("usage", this.apikey, cb)
  }
}

class Finance {
  constructor(category, apikey) {
    this.category = category
    this.apikey   = apikey
  }
  /**
		 * @funcName get
		 * @group    Crypto
		 *
     * @params {String} entity   required The entity the data returned corresponds to
     * @params {String} period   optional The time period of the data returned ('last', 'week', 'month' or 'year')
     * @params {String} callback optional Callback to handle response
		 *
		 * @funcSample Crypto.get(entity, period)
		 *
     * @returnval {String} category
     * @returnval {String} period
     * @returnval {String} entity
     * @returnval {Array}  data
     *
		 * @funcReturn:
		 *    {
            "category":"crypto",
            "period":"last",
            "entity":"bitcoin",
            "data":[
                      {
                        "entity":"bitcoin",
                        "value":8193.47,
                        "timestamp":1511337600,
                        "date":"2017-11-22"
                      }
                    ]
          }
		 */
  get(entity, period, cb) {

    let callback = (typeof(period) == 'function' && cb === null) ? period : cb
    let per      = (period === null || typeof(period) == 'function')? 'last' : params.period

    return utils.getDatavideApi(`finance/${this.category}/${entity}/${per}`, this.apikey, callback);
  }

  list(cb) {
    return utils.getDatavideApi(`finance/${this.category}/list`, this.apikey, cb);
  }
}

class Crypto extends Finance {
  constructor(apikey) {
    super('crypto', apikey)
  }
}

class Bond extends Finance {
  constructor(apikey) {
    super('bond', apikey)
  }
}

class Equity extends Finance {
  constructor(apikey) {
    super('equity', apikey)
  }
}

class Commodity extends Finance {
  constructor(apikey) {
    super('commodity', apikey)
  }
}

class Currency extends Finance {
  constructor(apikey) {
    super('currency', apikey)
  }
}

class Future extends Finance {
  constructor(apikey) {
    super('future', apikey)
  }
}
