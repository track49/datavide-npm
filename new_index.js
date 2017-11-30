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
     * @params {Function} callback optional Callback to handle response
     *
     * @funcSample Crypto.get(entity, period, callback)
     *
     * @returnval {String} category Category of returned data (crypto)
     * @returnval {String} period   Period of the returned data
     * @returnval {String} entity   Name of the entity the data corresponds to
     * @returnval {Array}  data     Array of data for <entity> from the last <period>
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
        * @params {Function} callback optional Callback to handle response
        *
        * @funcSample Crypto.list(callback)
        *
        * @returnval {String} category Category of returned data (crypto)
        * @returnval {Array}  entities List of available crypto currencies
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
     * @params {Function} callback optional Callback to handle response
     *
     * @funcSample Bond.get(entity, period, callback)
     *
     * @returnval {String} category Category of returned data (bond)
     * @returnval {String} period   Period of the returned data
     * @returnval {String} entity   Name of the entity the data corresponds to
     * @returnval {Array}  data     Array of data for <entity> from the last <period>
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
        * @params {Function} callback optional Callback to handle response
        *
        * @funcSample Bond.list(callback)
        *
        * @returnval {String} category Category of returned data (bond)
        * @returnval {Array}  entities List of available bonds
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
     * @params {Function} callback optional Callback to handle response
     *
     * @funcSample Equity.get(entity, period, callback)
     *
     * @returnval {String} category Category of returned data (equity)
     * @returnval {String} period   Period of the returned data
     * @returnval {String} entity   Name of the entity the data corresponds to
     * @returnval {Array}  data     Array of data for <entity> from the last <period>
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
        * @params {Function} callback optional Callback to handle response
        *
        * @funcSample Equity.list(callback)
        *
        * @returnval {String} category Category of returned data (equity)
        * @returnval {Array}  entities List of available equities
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
     * @params {Function} callback optional Callback to handle response
     *
     * @funcSample Commodity.get(entity, period, callback)
     *
     * @returnval {String} category Category of returned data (commodity)
     * @returnval {String} period   Period of the returned data
     * @returnval {String} entity   Name of the entity the data corresponds to
     * @returnval {Array}  data     Array of data for <entity> from the last <period>
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
        * @params {Function} callback optional Callback to handle response
        *
        * @funcSample Commodity.list(callback)
        *
        * @returnval {String} category Category of returned data (commodity)
        * @returnval {Array}  entities List of available commodities
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
     * @params {Function} callback optional Callback to handle response
     *
     * @funcSample Currency.get(entity, period, callback)
     *
     * @returnval {String} category Category of returned data (currency)
     * @returnval {String} period   Period of the returned data
     * @returnval {String} entity   Name of the entity the data corresponds to
     * @returnval {Array}  data     Array of data for <entity> from the last <period>
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
        * @params {Function} callback optional Callback to handle response
        *
        * @funcSample Currency.list(callback)
        *
        * @returnval {String} category Category of returned data (currency)
        * @returnval {Array}  entities List of available currencies
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
     * @params {Function} callback optional Callback to handle response
     *
     * @funcSample Future.get(entity, period, callback)
     *
     * @returnval {String} category Category of returned data (future)
     * @returnval {String} period   Period of the returned data
     * @returnval {String} entity   Name of the entity the data corresponds to
     * @returnval {Array}  data     Array of data for <entity> from the last <period>
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
        * @params {Function} callback optional Callback to handle response
        *
        * @funcSample Future.list(callback)
        *
        * @returnval {String} category Category of returned data (future)
        * @returnval {Array}  entities List of available futures
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
     * @params {Function} callback  optional Callback to handle response
     *
     * @funcSample Indicators.get(country, indicator, period, callback)
     *
     * @returnval {String} country Country that the data corresponds to
     * @returnval {String} period  Period of the returned data
     * @returnval {String} entity  Name of the entity the data corresponds to
     * @returnval {Array}  data    Array of data for <entity> from the last <period>
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
        * @params {String}   country  required The country the data returned corresponds to
        * @params {Function} callback optional Callback to handle response
        *
        * @funcSample Indicators.list(country, callback)
        *
        * @returnval {String} country Country that the data corresponds to
        * @returnval {Array}  entities List of available indicators for country
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
     * @params {String}   team      required The team the data returned corresponds to
     * @params {Function} callback  optional Callback to handle response
     *
     * @funcSample Nba.getTeam(team, callback)
     *
     * @returnval {String} team    Team the returned data corresponds to
     * @returnval {Array}  players The players from <team> and their stats
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
        * @params {String} player      required The player the data returned corresponds to
        * @params {Function} callback  optional Callback to handle response
        *
        * @funcSample Nba.getPlayer(player, callback)
        *
        * @returnval {Integer} gp      Games played
        * @returnval {String}  3pm-3pa Average 3 point shots made vs attempted per game
        * @returnval {String}  fgm-fga Average field goals made vs attempted per game
        * @returnval {String}  name    Player name
        * @returnval {Float}   pts     Average points per game
        * @returnval {String}  pos     Position
        * @returnval {String}  team    Team
        * @returnval {String}  ftm-fta Average free throws made vs attempted per game
        * @returnval {Float}   ft%     Percent of free throws made in range [0, 1]
        * @returnval {Float}   3p%     Percent of 3 point shots made in range [0, 1]
        * @returnval {Float}   fg%     Percent of field goals made in range [0, 1]
        * @returnval {Float}   mpg     Average minutes of playing time per game

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
        * @params {Function} callback optional Callback to handle response
        *
        * @funcSample Nba.listPlayers(callback)
        *
        * @returnval {Array}  players List of all current NBA players
        *
        * @funcReturn:
          {
            "players" : [
                          "aaron gordon",
                          "al horford",
                          "alec burks",
                          "alex abrines",
                          "alex len",
                          "allen crabbe"
                        ]
          }
        */

        /**
           * @funcName listTeams
           * @group    NBA
           *
           * @params {Function} callback optional Callback to handle response
           *
           * @funcSample Nba.list(callback)
           *
           * @returnval {String} league League the returned teams belong to (NBA)
           * @returnval {Array}  teams  List of all current NBA teams
           *
           * @funcReturn:
             {
               "league" : "nba",
               "teams"  : [
                            "atl",
                            "bkn",
                            "bos",
                            "cha",
                            "chi"
                          ]
           }
           */
}

class Nhl extends Sports {
  constructor(apikey) {
    super("nhl", apikey)
  }

  /**
     * @funcName getTeam
     * @group    NHL
     *
     * @params {String}   team      required The team the data returned corresponds to
     * @params {Function} callback  optional Callback to handle response
     *
     * @funcSample Nhl.getTeam(team, callback)
     *
     * @returnval {String} team    Team the returned data corresponds to
     * @returnval {Array}  players The players from <team> and their stats
     *
     * @funcReturn:
      {
         "team"    : "pit",
         "players" : [
                       {
                         "pts/g"   : 1.23,
                         "gp"      : 26,
                         "goals"   : 11,
                         "assists" : 21,
                         "pim"     : 24,
                         "name"    : "phil kessel",
                         "pos"     : "rw",
                         "ppa"     : 14,
                         "points"  : 32,
                         "gwg"     : 2,
                         "shg"     : 0,
                         "ppg"     : 3,
                         "pct"     : 11.1,
                         "team"    : "pit",
                         "+/-"     : 2,
                         "sha"     : 0,
                         "sog"     : 99
                       },
                       {
                         "pts/g"   : 0.96,
                         "gp"      : 26,
                         "goals"   : 10,
                         "assists" : 15,
                         "pim"     : 32,
                         "name"    : "sidney crosby",
                         "pos"     : "c",
                         "ppa"     : 7,
                         "points"  : 25,
                         "gwg"     : 3,
                         "shg"     : 0,
                         "ppg"     : 6,
                         "pct"     : 11.8,
                         "team"    : "pit",
                         "+/-"     : -10,
                         "sha"     : 0,
                         "sog"     : 85
                       }
                     ]
            }
     */

     /**
        * @funcName getPlayer
        * @group    NHL
        *
        * @params {String}   player    required The player the data returned corresponds to
        * @params {Function} callback  optional Callback to handle response
        *
        * @funcSample Nhl.getPlayer(player, callback)
        *
        * @returnval {Float}   pts/g   Points per game
        * @returnval {Integer} gp      Games played
        * @returnval {Integer} goals   Goals scored
        * @returnval {Integer} assists Assists
        * @returnval {Integer} pim     Penalty minutes
        * @returnval {String}  name    Player anme
        * @returnval {String}  pos     Position
        * @returnval {Integer} ppa     Power play assists
        * @returnval {Integer} points  Total points
        * @returnval {Integer} gwg     Game winning goals
        * @returnval {Integer} shg     Short handed goals
        * @returnval {Integer} ppg     Power play goals
        * @returnval {Float}   pct     Shooting percentage
        * @returnval {String}  team    Team
        * @returnval {Integer} +/-     Plus/minus rating
        * @returnval {Integer} sha     Short handed assists
        * @returnval {Integer} sog     Shots on goal
        *
        * @funcReturn:
        {
          "pts/g"   : 0.96,
          "gp"      : 26,
          "goals"   : 10,
          "assists" : 15,
          "pim"     : 32,
          "name"    : "sidney crosby",
          "pos"     : "c",
          "ppa"     : 7,
          "points"  : 25,
          "gwg"     : 3,
          "shg"     : 0,
          "ppg"     : 6,
          "pct"     : 11.8,
          "team"    : "pit",
          "+/-"     : -10,
          "sha"     : 0,
          "sog"     : 85
        }

        */

     /**
        * @funcName listPlayers
        * @group    NHL
        *
        * @params {Function} callback optional Callback to handle response
        *
        * @funcSample Nhl.listPlayers(callback)
        *
        * @returnval {Array}  players List of all current NHL players
        *
        * @funcReturn:
          {
            "players" : [
                          "a.j. greer",
                          "aaron ekblad",
                          "aaron ness",
                          "adam clendening",
                          "adam henrique"
                        ]
          }
        */

        /**
           * @funcName listTeams
           * @group    NBA
           *
           * @params {Function} callback optional Callback to handle response
           *
           * @funcSample Nhl.list(callback)
           *
           * @returnval {String} league League the returned teams belong to (NHL)
           * @returnval {Array}  teams  List of all current NHL teams
           *
           * @funcReturn:
             {
               "league" : 'nba',
               "teams"  : [
                            "ana",
                            "ari",
                            "bos",
                            "buf",
                            "car",
                            "chi"
                          ]
           }
           */

}

class SportsPos extends Sports {
  constructor(league, apikey) {
    super(league, apikey)
  }

  getTeam(team, position, cb) {


    return utils.getDatavideApi(`sports/${this.league}/team/${position}/${team}`, this.apikey, cb);
  }

  getPlayer(player, position, cb) {

    return utils.getDatavideApi(`sports/${this.league}/player/${position}/${player}`, this.apikey, cb);
  }

  listPlayers(position, cb) {
    return utils.getDatavideApi(`sports/${this.league}/players/${position}`, this.apikey, cb);
  }
}

class Mlb extends SportsPos {
  constructor(apikey) {
    super("mlb", apikey)
  }

  /**
     * @funcName getTeam
     * @group    MLB
     *
     * @params {String}   team      required The team the data returned corresponds to
     * @params {String}   position  required The position of desired players (batting or pitching)
     * @params {Function} callback  optional Callback to handle response
     *
     * @funcSample Mlb.getTeam(team, position, callback)
     *
     * @returnval {String} team    Team the returned data corresponds to
     * @returnval {Array}  players The players from <team> and their stats
     *
     * @funcReturn:
       {
         "team"    : "bos",
         "players" : [
                     {
                       "r"    : 73,
                       "gp"   : 32,
                       "ip"   : 214.1,
                       "era"  : 2.9,
                       "bb"   : 43,
                       "er"   : 69,
                       "whip" : 0.97,
                       "name" : "chris sale",
                       "w"    : 17,
                       "blsv" : 0,
                       "war"  : 0,
                       "so"   : 308,
                       "l"    : 8,
                       "team" : "bos",
                       "h"    : 165,
                       "sv"   : 0,
                       "gs"   : 32
                     },
                     {
                       "r"    : 69,
                       "gp"   : 32,
                       "ip"   : 173.2,
                       "era"  : 3.32,
                       "bb"   : 69,
                       "er"   : 64,
                       "whip" : 1.35,
                       "name" : "drew pomeranz",
                       "w"    : 17,
                       "blsv" : 0,
                       "war"  : 0,
                       "so"   : 174,
                       "l"    : 6,
                       "team" : "bos",
                       "h"    : 166,
                       "sv"   : 0,
                       "gs"   : 32 },

                     }
                  ]
       }
     */

     /**
        * @funcName getPlayer
        * @group    MLB
        *
        * @params {String}   player    required The player the data returned corresponds to
        * @params {String}   position    required The position of desired players (batting or pitching)
        * @params {Function} callback  optional Callback to handle response
        *
        * @funcSample Mlb.getPlayer(player, position, callback)
        *
        * @returnval {Integer} r    Runs
        * @returnval {Integer} gp   Games played
        * @returnval {Float}   ip   Innings pitched
        * @returnval {Float}   era  Earned run average
        * @returnval {Integer} bb   Walks
        * @returnval {Integer} er   Earned runs
        * @returnval {Float}   whip Walks and hits per innings pitched
        * @returnval {String}  name Player name
        * @returnval {Integer} w    Wins
        * @returnval {Integer} blsv Blown saves
        * @returnval {Integer} so   Strikeouts
        * @returnval {Integer} hld  Holds
        * @returnval {Integer} l    Losses
        * @returnval {Float}   team Team
        * @returnval {Integer} h    Hits
        * @returnval {Integer} sv   Saves
        * @returnval {Integer} gs   Games started
        *
        * @funcReturn:
        {
          "r"    : 73,
          "gp"   : 32,
          "ip"   : 214.1,
          "era"  : 2.9,
          "bb"   : 43,
          "er"   : 69,
          "whip" : 0.97,
          "name" : "chris sale",
          "w"    : 17,
          "blsv" : 0,
          "so"   : 308,
          "hld"  : 0,
          "l"    : 8,
          "team" : "bos",
          "h"    : 165,
          "sv"   : 0,
          "gs"   : 32
        }

        */

     /**
        * @funcName listPlayers
        * @group    MLB
        *
        * @params {String}   position required Position of desired players (batting or pitching)
        * @params {Function} callback optional Callback to handle response
        *
        * @funcSample Mlb.listPlayers(position, callback)
        *
        * @returnval {Array}  players List of all current MLB <position> players
        *
        * @funcReturn:
           {
             "players" : [
                           "aaron nola",
                           "alex cobb",
                           "andrew cashner",
                           "carlos carrasco"
                         ]
           }

        */

        /**
           * @funcName listTeams
           * @group    MLB
           *
           * @params {Function} callback optional Callback to handle response
           *
           * @funcSample Mlb.list(callback)
           *
           * @returnval {String} league League the returned teams belong to (MLB)
           * @returnval {Array}  teams  List of all current MLB teams
           *
           * @funcReturn:
              {
                "league": "mlb",
                "teams" : [
                            "ari",
                            "atl",
                            "bal",
                            "bos",
                            "chc"
                          ]
              }
           */

}

class Nfl extends SportsPos {
  constructor(apikey) {
    super("nfl", apikey)
  }

  /**
     * @funcName getTeam
     * @group    NFL
     *
     * @params {String}   team      required The team the data returned corresponds to
     * @params {String}   position  required The position of desired players (rushing or passing)
     * @params {Function} callback  optional Callback to handle response
     *
     * @funcSample Nfl.getTeam(team, position, callback)
     *
     * @returnval {String} team    Team the returned data corresponds to
     * @returnval {Array}  players The players from <team> and their stats
     *
     * @funcReturn:
       {
         "team"    : "ne",
         "players" : [
                      {
                        "completionPercentage" : 68.4,
                        "interceptionsThrown"  : 3,
                        "passingYardsPerGame"  : 307,
                        "name"                 : "tom brady",
                        "yardsPerAttempt"      : 8.27,
                        "attempts"             : 408,
                        "pos"                  : "qb",
                        "passerRating"         : 111.7,
                        "passingTouchdowns"    : 26,
                        "team"                 : "ne",
                        "sacks"                : 24,
                        "passingYards"         : 3374,
                        "longestPass"          : 64,
                        "completions"          : 279
                      }
                    ]

       }
     */

     /**
        * @funcName getPlayer
        * @group    NFL
        *
        * @params {String}   player    required The player the data returned corresponds to
        * @params {String}   position  required The position of desired players (rushing or passing)
        * @params {Function} callback  optional Callback to handle response
        *
        * @funcSample Nfl.getPlayer(player, position, callback)
        *
        * @returnval {Float}   completionPercentage Percent of passes completed
        * @returnval {Integer} interceptionsThrown  Interceptions thrown
        * @returnval {Integer} passingYardsPerGame  Passing yards per game
        * @returnval {String}  name                 Player name
        * @returnval {Float}   yardsPerAttempt      Yards per passing attempt
        * @returnval {Integer} attempts             Passing attempts
        * @returnval {String}  pos                  Position
        * @returnval {Float}   passerRating         Passer rating
        * @returnval {Integer} passingTouchdowns    Passing touchdowns
        * @returnval {String}  team                 Team
        * @returnval {Integer} sacks                Sacks
        * @returnval {Integer} passingYards         Total passing yards
        * @returnval {Integer} longestPass          Longest pass
        * @returnval {Integer} completions          Completed passes
        *
        * @funcReturn:
        {
          "completionPercentage" : 68.4,
          "interceptionsThrown"  : 3,
          "passingYardsPerGame"  : 307,
          "name"                 : "tom brady",
          "yardsPerAttempt"      : 8.27,
          "attempts"             : 408,
          "pos"                  : "qb",
          "passerRating"         : 111.7,
          "passingTouchdowns"    : 26,
          "team"                 : "ne",
          "sacks"                : 24,
          "passingYards"         : 3374,
          "longestPass"          : 64,
          "completions"          : 279
        }

        */

     /**
        * @funcName listPlayers
        * @group    NFL
        *
        * @params {String}   position required Position of desired players (batting or pitching)
        * @params {Function} callback optional Callback to handle response
        *
        * @funcSample Nfl.listPlayers(position, callback)
        *
        * @returnval {Array}  players List of all current NFL <position> players
        *
        * @funcReturn:
           {
             "players" : [
                          "aaron rodgers",
                          "alex smith",
                          "andy dalton",
                          "ben roethlisberger",
                          "blaine gabbert"
                        ]
           }

        */

        /**
           * @funcName listTeams
           * @group    NFL
           *
           * @params {Function} callback optional Callback to handle response
           *
           * @funcSample Nfl.list(callback)
           *
           * @returnval {String} league League the returned teams belong to (NFL)
           * @returnval {Array}  teams  List of all current NFL teams
           *
           * @funcReturn:
              {
                "league" : "mlb",
                "teams"  : [
                             "ari",
                             "atl",
                             "bal",
                             "buf",
                             "car",
                           ]
              }
           */

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
