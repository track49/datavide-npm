"use strict"

const utils = require("./utils.js")

function getFinance(options, cb) {
  // required fields in the options object
  let required = ['category', 'entity', 'period', 'apikey'];
  // checkOptions verifies that the required fields are present.
  utils.checkOptions(required, options);
  return utils.getDatavideApi(`finance/${options.category}/${options.entity}/${options.period}`, options.apikey, cb);
}

function getEconomics(options, cb) {
  let required = ['category', 'country', 'indicatorName', 'apikey'];
  utils.checkOptions(required, options);
  return utils.getDatavideApi(`economics/${options.category}/${options.country}/${options.indicatorName}`, options.apikey, cb)
}

function getCompanies(options, cb) {
  let required = ['category', 'entity', 'period', 'apikey'];
  utils.checkOptions(required, options);
  return utils.getDatavideApi(`finance/${options.category}/${options.entity}/${options.period}`, options.apikey, cb)
}

function getSports(options, cb) {

  if (options.category == "teams") {
    request = `sports/${options.league}/teams`
  } else {
    if ((options.league == "nfl") || (options.league == "mlb")) {
      if (options.category == "players") {
        request = `sports/${options.league}/players/${options.position}`
      } else {
        request = `sports/${options.league}/${options.category}/${options.position}/${options.entity}`
      }
    } else {
      if (options.category == "players") {
        request = `sports/${options.league}/players`
      } else {
        request = `sports/${options.league}/${options.category}/${options.entity}`
      }
    }
  }

  return utils.getDatavideApi(request, options.apikey, cb)
}

function getUsage(apikey, cb) {
  return utils.getDatavideApi("usage", apikey, cb)
}

exports.getFinance   = getFinance
exports.getEconomics = getEconomics
exports.getCompanies = getCompanies
exports.getSports    = getSports
exports.getUsage     = getUsage
