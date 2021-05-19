function equal(a, b) {
  if (a !== b) {
    throw Error(`${a} and ${b} isn't equal!`)
  }
}

function isActualyNaN(nan) {
  if (!isNaN(nan)) {
    throw Error(`${nan} isn't NaN!`)
  }
}

function arrayEqual(a, b) {
  if (`${a}` !== `${b}`) {
    throw Error(`${a} and ${b} isn't equal!`)
  }
}

module.exports = {
  equal,
  isActualyNaN,
  arrayEqual
}
