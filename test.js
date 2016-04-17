var CS = require('./index')
var cs = new CS

CS.update(cs)
console.log(cs)

setTimeout(function () {
  CS.update(cs)
  console.log(cs)
}, 50)

setTimeout(function () {
  CS.update(cs)
  console.log(cs)
}, 100)
