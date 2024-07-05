const sumAll = function(a, b) {
    if (typeof a != "number" || typeof b != "number" ||a < 0 || b < 0) return "ERROR"
    return ((a + b) / 2) * (Math.max(b, a) - Math.min(a, b) + 1)
};


// Do not edit below this line
module.exports = sumAll;
