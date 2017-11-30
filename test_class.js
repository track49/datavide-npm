"use strict"

const datavide = require("./new_index.js")

// let crypto = new datavide.Future("234ECBC94B859DBAC7A6F0B5E910759C")

// crypto.get("ftse_100_index", (err, res) => {
//   console.log(res)
// })

async function test() {
  let crypto = new datavide.Nfl("234ECBC94B859DBAC7A6F0B5E910759C")

  let res = await crypto.listTeams()

  console.log(res)
}

test()

// crypto.list((err, res) => {
//   console.log(res)
// })
