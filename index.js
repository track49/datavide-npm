const utils = require("./utils.js")

function getFinance(options, cb) {
  // required fields in the options object
  let required = ['category', 'entity', 'period', 'apiKey'];
  // checkOptions verifies that the required fields are present.
  utils.checkOptions(required, options);
  return utils.getDatavideApi(`finance/${options.category}/${options.entity}/${options.period}`, options.apiKey, cb);
}

function getEconomics(options, cb) {
  let required = ['category', 'country', 'indicatorName', 'apiKey'];
  utils.checkOptions(required, options);
  return utils.getDatavideApi(`economics/${options.category}/${options.country}/${options.indicatorName}`, options.key, cb)
}

function getCompanies(options, cb) {
  let required = ['category', 'entity', 'period', 'apiKey'];
  utils.checkOptions(required, options);
  return utils.getDatavideApi(`finance/${options.category}/${options.symbol}/${options.period}`, options.key, cb)
}

exports.getFinance = getFinance
exports.getEconomics = getEconomics
exports.getCompanies = getCompanies
