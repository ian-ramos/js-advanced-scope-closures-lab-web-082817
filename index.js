function produceDrivingRange(range) {
  return function(start, end) {
    if (Math.abs(parseInt(end) - parseInt(start)) > range) {
      return `${Math.abs(parseInt(end) - parseInt(start)) - range} blocks out of range`
    }
    else {
      return `within range by ${range - Math.abs(parseInt(end) - parseInt(start))}`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(amount) {
    return amount * percentage
  }
}
