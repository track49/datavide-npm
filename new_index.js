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

  get(entity, period, cb) {

    let callback = (typeof(period) == 'function' && cb == null) ? period : cb
    let per      = (period == null || typeof(period) == 'function')? 'last' : period

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

  /**
     * @funcName get
     * @group    Crypto
     *
     * @params {String} entity   required The entity the data returned corresponds to
     * @params {String} period   optional The time period of the data returned ('last', 'week', 'month' or 'year')
     * @params {String} callback optional Callback to handle response
     *
     * @funcSample Crypto.get(entity, period, callback)
     *
     * @returnval {String} category
     * @returnval {String} period
     * @returnval {String} entity
     * @returnval {Array}  data
     *
     * @funcReturn:
          {
            "category" : "crypto",
            "period"   : "last",
            "entity"   : "bitcoin",
            "data":[
                      {
                        "entity"    : "bitcoin",
                        "value"     : 8193.47,
                        "timestamp" : 1511337600,
                        "date"      : "2017-11-22"
                      }
                    ]
          }
     */

     /**
        * @funcName list
        * @group    Crypto
        *
        * @params {String} callback optional Callback to handle response
        *
        * @funcSample Crypto.list(callback)
        *
        * @returnval {String} category
        * @returnval {Array}  entities
        *
        * @funcReturn:
             {
               "category" : "crypto",
               "entities" : [
                              "bitcoin",
                              "ethereum",
                              "litecoin",
                              "ripple"
                            ]
            }
        */
}

class Bond extends Finance {
  constructor(apikey) {
    super('bond', apikey)
  }

  /**
     * @funcName get
     * @group    Bond
     *
     * @params {String} entity   required The entity the data returned corresponds to
     * @params {String} period   optional The time period of the data returned ('last', 'week', 'month' or 'year')
     * @params {String} callback optional Callback to handle response
     *
     * @funcSample Bond.get(entity, period, callback)
     *
     * @returnval {String} category
     * @returnval {String} period
     * @returnval {String} entity
     * @returnval {Array}  data
     *
     * @funcReturn:
          {
            "category" : "bond",
            "period"   : "last",
            "entity"   : "australia",
            "data"     : [
                           {
                             "entity"    : "australia",
                             "value"     : 2.5,
                             "timestamp" : 1511510400,
                             "date"      : "2017-11-24"
                           }
                         ]
          }
     */

     /**
        * @funcName list
        * @group    Bond
        *
        * @params {String} callback optional Callback to handle response
        *
        * @funcSample Bond.list(callback)
        *
        * @returnval {String} category
        * @returnval {Array}  entities
        *
        * @funcReturn:
             {
               "category" : "bond",
               "entities" : [
                              "australia",
                              "brazil",
                              "canada",
                              "france",
                              "germany",
                            ]
             }
        */

}

class Equity extends Finance {
  constructor(apikey) {
    super('equity', apikey)
  }

  /**
     * @funcName get
     * @group    Equity
     *
     * @params {String} entity   required The entity the data returned corresponds to
     * @params {String} period   optional The time period of the data returned ('last', 'week', 'month' or 'year')
     * @params {String} callback optional Callback to handle response
     *
     * @funcSample Equity.get(entity, period, callback)
     *
     * @returnval {String} category
     * @returnval {String} period
     * @returnval {String} entity
     * @returnval {Array}  data
     *
     * @funcReturn:
          {
            "category" : "equity",
            "period"   : "last",
            "entity"   : "hog",
            "data"     : [
                           {
                             "open"      : 47.7,
                             "date"      : "2017-11-24",
                             "value"     : 47.4,
                             "close"     : 47.4,
                             "volume"    : 587004.0,
                             "high"      : 47.72,
                             "alias"     :
                                           [
                                             "hog",
                                             "nyse:hog"
                                           ],
                             "low"       : 47.2,
                             "exchange"  : "nyse",
                             "timestamp" : 1511510400,
                             "entity"    : "hog"
                           }
                         ]
          }
     */

     /**
        * @funcName list
        * @group    Equity
        *
        * @params {String} callback optional Callback to handle response
        *
        * @funcSample Equity.list(callback)
        *
        * @returnval {String} category
        * @returnval {Array}  entities
        *
        * @funcReturn:
             {
               "category" : "equity",
               "entities" : [
                              "aapl",
                              "amzn",
                              "msft",
                              "tsla",
                              "f",
                              "hog"
                            ]
             }
        */

}

class Commodity extends Finance {
  constructor(apikey) {
    super('commodity', apikey)
  }

  /**
     * @funcName get
     * @group    Commodity
     *
     * @params {String} entity   required The entity the data returned corresponds to
     * @params {String} period   optional The time period of the data returned ('last', 'week', 'month' or 'year')
     * @params {String} callback optional Callback to handle response
     *
     * @funcSample Commodity.get(entity, period, callback)
     *
     * @returnval {String} category
     * @returnval {String} period
     * @returnval {String} entity
     * @returnval {Array}  data
     *
     * @funcReturn:
          {
            "category" : "commodity",
            "period"   : "last",
            "entity"   : "corn_cbot",
            "data"     : [
                           {
                             "entity"    : "corn_cbot",
                             "value"     : 355.0,
                             "type"      : "agriculture",
                             "unit"      : "USd/bu.",
                             "timestamp" : 1511510400,
                             "date"      : "2017-11-24"
                           }
                         ]
          }
     */

     /**
        * @funcName list
        * @group    Commodity
        *
        * @params {String} callback optional Callback to handle response
        *
        * @funcSample Commodity.list(callback)
        *
        * @returnval {String} category
        * @returnval {Array}  entities
        *
        * @funcReturn:
             {
               "category" : "commodity",
               "entities" : [
                              "3mo_aluminum_lme",
                              "brent_crude_ice",
                              "cocoa_ice",
                              "coffee_'c'_ice",
                              "copper_comex",
                              "corn_cbot",
                              "crude_oil_tokyo",
                              "ecx_emissions_ice",
                              "ethanol_cbot",
                              "feeder_cattle_cme"
                            ]
             }
        */
}

class Currency extends Finance {
  constructor(apikey) {
    super('currency', apikey)
  }

  /**
     * @funcName get
     * @group    Currency
     *
     * @params {String} entity   required The entity the data returned corresponds to
     * @params {String} period   optional The time period of the data returned ('last', 'week', 'month' or 'year')
     * @params {String} callback optional Callback to handle response
     *
     * @funcSample Currency.get(entity, period, callback)
     *
     * @returnval {String} category
     * @returnval {String} period
     * @returnval {String} entity
     * @returnval {Array}  data
     *
     * @funcReturn:
          {
            "category" : "currency",
            "period"   : "last",
            "entity"   : "gbp_usd",
            "data"     : [
                           {
                             "entity"    : "gbp_usd",
                             "value"     : 1.3341,
                             "timestamp" : 1511510400,
                             "date"      : "2017-11-24"
                           }
                         ]
          }
     */

     /**
        * @funcName list
        * @group    Currency
        *
        * @params {String} callback optional Callback to handle response
        *
        * @funcSample Currency.list(callback)
        *
        * @returnval {String} category
        * @returnval {Array}  entities
        *
        * @funcReturn:
             {
               "category" : "currency",
               "entities" : [
                              "aud_usd",
                              "eur_chf",
                              "eur_gbp",
                              "eur_jpy",
                              "eur_usd",
                              "gbp_usd",
                              "usd_cad",
                              "usd_chf",
                              "usd_hkd",
                              "usd_jpy",
                              "usd_krw"
                            ]
             }
        */

}

class Future extends Finance {
  constructor(apikey) {
    super('future', apikey)
  }

  /**
     * @funcName get
     * @group    Future
     *
     * @params {String} entity   required The entity the data returned corresponds to
     * @params {String} period   optional The time period of the data returned ('last', 'week', 'month' or 'year')
     * @params {String} callback optional Callback to handle response
     *
     * @funcSample Future.get(entity, period, callback)
     *
     * @returnval {String} category
     * @returnval {String} period
     * @returnval {String} entity
     * @returnval {Array}  data
     *
     * @funcReturn:
          {
            "category" : "future",
            "period"   : "last",
            "entity"   : "adx_general_index",
            "data"     : [
                           {
                             "entity"    : "adx_general_index",
                             "value"     : 4287.07,
                             "timestamp" : 1511510400,
                             "date"      : "2017-11-24"
                           }
                         ]
          }
     */

     /**
        * @funcName list
        * @group    Future
        *
        * @params {String} callback optional Callback to handle response
        *
        * @funcSample Future.list(callback)
        *
        * @returnval {String} category
        * @returnval {Array}  entities
        *
        * @funcReturn:
             {
               "category" : "future",
               "entities" : [
                              "adx_general_index",
                              "aex-index",
                              "all_ordinaries_indx",
                              "amman_se_general_index",
                              "amsterdam_midkap_index",
                              "argentina_burcap_index"
                            ]
             }
        */

}


class Economics {
  constructor(category, apikey) {
    this.category = category
    this.apikey   = apikey
  }

  get(country, indicator, period, cb) {

    let callback = (typeof(period) == 'function' && cb == null) ? period : cb
    let per      = (period == null || typeof(period) == 'function')? 'last' : period

    return utils.getDatavideApi(`economics/${this.category}/${country}/${indicator}/${per}`, this.apikey, callback);
  }

  list(country, cb) {
    return utils.getDatavideApi(`economics/${this.category}/${country}/list`, this.apikey, cb);
  }
}

class Indicators extends Economics {
  constructor(apikey) {
    super("indicators", apikey)
  }

  /**
     * @funcName get
     * @group    Indicators
     *
     * @params {String} country   required The country the data returned corresponds to
     * @params {String} indicator required The indicator the data returned corresponds to
     * @params {String} period    optional The time period of the data returned ('last', 'week', 'month' or 'year')
     * @params {String} callback  optional Callback to handle response
     *
     * @funcSample Indicators.get(country, indicator, period, callback)
     *
     * @returnval {String} country
     * @returnval {String} period
     * @returnval {String} entity
     * @returnval {Array}  data
     *
     * @funcReturn:
        {
          "country" : "canada",
          "period"  : "last",
          "entity"  : "gdp_growth_rate",
          "data"    : [
                        {
                          "entity"    : "gdp_growth_rate",
                          "country"   : "canada",
                          "value"     : 1.1,
                          "unit"      : "%",
                          "frequency" : "Quarterly",
                          "timestamp" : 1511510400,
                          "date"      : "2017-11-24"
                        }
                      ]
        }

     */

     /**
        * @funcName list
        * @group    Indicators
        *
        * @params {String} callback optional Callback to handle response
        *
        * @funcSample Indicators.list(callback)
        *
        * @returnval {String} country
        * @returnval {Array}  entities
        *
        * @funcReturn:
        {
          "country"  : "canada",
          "entities" : [
                         "asylum_applications",
                         "balance_of_trade",
                         "bank_lending_rate",
                         "bankruptcies",
                         "banks_balance_sheet"
                       ]
        }
        */

}


class Sports {
  constructor(league, apikey) {
    this.league   = league
    this.apikey   = apikey
  }

  getTeam(team, cb) {
    return utils.getDatavideApi(`sports/${this.league}/team/${team}`, this.apikey, cb);
  }

  getPlayer(player, cb) {
    return utils.getDatavideApi(`sports/${this.league}/player/${player}`, this.apikey, cb);
  }

  listPlayers(cb) {
    return utils.getDatavideApi(`sports/${this.league}/players`, this.apikey, cb);
  }

  listTeams(cb) {
    return utils.getDatavideApi(`sports/${this.league}/teams`, this.apikey, cb);
  }
}

class Nba extends Sports {
  constructor(apikey) {
    super("nba", apikey)
  }
  /**
     * @funcName getTeam
     * @group    NBA
     *
     * @params {String} team      required The team the data returned corresponds to
     * @params {String} callback  optional Callback to handle response
     *
     * @funcSample NBA.getTeam(team, callback)
     *
     * @returnval {String} team
     * @returnval {Array}  players
     *
     * @funcReturn:
          {
            "team"    : "gs",
            "players" : [
                          {
                            "gp"      : 17,
                            "3pm-3pa" : "3.5-9.2",
                            "fgm-fga" : "7.9-16.9",
                            "name"    : "stephen curry",
                            "pts"     : 25.5,
                            "pos"     : "pg",
                            "team"    : "gs",
                            "ftm-fta" : "6.1-6.5",
                            "ft%"     : 0.937,
                            "3p%"     : 0.382,
                            "fg%"     : 0.469,
                            "mpg"     : 32.3
                          },
                          {
                            "gp"      : 16,
                            "3pm-3pa" : "2.6-5.9",
                            "fgm-fga" : "9.0-17.0",
                            "name"    : "kevin durant",
                            "pts"     : 24.7,
                            "pos"     : "sf",
                            "team"    : "gs",
                            "ftm-fta" : "4.1-4.8",
                            "ft%"     : 0.868,
                            "3p%"     : 0.432,
                            "fg%"     : 0.529,
                            "mpg"     : 34.1
                          },
                        ]
          }



     */

     /**
        * @funcName getPlayer
        * @group    NBA
        *
        * @params {String} player    required The country the data returned corresponds to
        * @params {String} callback  optional Callback to handle response
        *
        * @funcSample NBA.getPlayer(player, callback)
        *
        * @returnval {String} country
        * @returnval {String} period
        * @returnval {String} entity
        * @returnval {Array}  data
        *
        * @funcReturn:
          {
            "gp"      : 16,
            "3pm-3pa" : "2.6-5.9",
            "fgm-fga" : "9.0-17.0",
            "name"    : "kevin durant",
            "pts"     : 24.7,
            "pos"     : "sf",
            "team"    : "gs",
            "ftm-fta" : "4.1-4.8",
            "ft%"     : 0.868,
            "3p%"     : 0.432,
            "fg%"     : 0.529,
            "mpg"     : 34.1
          }

        */

     /**
        * @funcName listPlayers
        * @group    NBA
        *
        * @params {String} callback optional Callback to handle response
        *
        * @funcSample NBA.list(callback)
        *
        * @returnval {String} country
        * @returnval {Array}  entities
        *
        * @funcReturn:
        {
          "country"  : "canada",
          "entities" : [
                         "asylum_applications",
                         "balance_of_trade",
                         "bank_lending_rate",
                         "bankruptcies",
                         "banks_balance_sheet"
                       ]
        }
        */

        /**
           * @funcName listPlayers
           * @group    NBA
           *
           * @params {String} callback optional Callback to handle response
           *
           * @funcSample NBA.list(callback)
           *
           * @returnval {String} country
           * @returnval {Array}  entities
           *
           * @funcReturn:
           {
             "country"  : "canada",
             "entities" : [
                            "asylum_applications",
                            "balance_of_trade",
                            "bank_lending_rate",
                            "bankruptcies",
                            "banks_balance_sheet"
                          ]
           }
           */
}

class Nhl extends Sports {
  constructor(apikey) {
    super("nhl", apikey)
  }
}

class SportsPos extends Sports {
  constructor(league, apikey) {
    super(league, apikey)
  }

  getTeam(team, position, cb) {

    let callback = (typeof(period) == 'function' && cb == null) ? period : cb
    let per      = (period == null || typeof(period) == 'function')? 'last' : period

    return utils.getDatavideApi(`sports/${this.league}/team/${position}/${team}`, this.apikey, callback);
  }

  getPlayer(player, position, cb) {

    let callback = (typeof(period) == 'function' && cb == null) ? period : cb
    let per      = (period == null || typeof(period) == 'function')? 'last' : period

    return utils.getDatavideApi(`sports/${this.league}/player/${position}/${player}`, this.apikey, callback);
  }

  listPlayers(cb, position) {
    return utils.getDatavideApi(`sports/${this.league}/players/${position}`, this.apikey, cb);
  }
}

class Mlb extends SportsPos {
  constructor(apikey) {
    super("mlb", apikey)
  }
}

class Nfl extends SportsPos {
  constructor(apikey) {
    super("nfl", apikey)
  }
}



exports.Crypto     = Crypto
exports.Bond       = Bond
exports.Equity     = Equity
exports.Commodity  = Commodity
exports.Currency   = Currency
exports.Future     = Future
exports.Indicators = Indicators
exports.Nba        = Nba
exports.Nhl        = Nhl
exports.Mlb        = Mlb
exports.Nfl        = Nfl
