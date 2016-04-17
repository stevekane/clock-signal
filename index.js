module.exports = ClockSignal

function ClockSignal () {
  this.start = Date.now()
  this.last = 0
  this.current = 0
  this.dT = 0
}

ClockSignal.update = function (c) {
  c.last = c.current
  c.current = Date.now() - c.start
  c.dT = c.current - c.last
}
