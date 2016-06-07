module.exports = {
  countIf: function(testFunc, arr) {
    var count = 0
    for (var i in arr) {
      if (testFunc(arr[i])) {
        count++
      }
    }
    return count
  },
  map: function (func, arr) {
    for(var i in arr){
      arr[i] = func(arr[i])
    }
    return arr
  },
  filter: function (func, arr) {
    var newArr = []
    for(var i in arr) {
      if(func(arr[i])) {
        newArr.push(arr[i])
      }
    }
    return newArr
  }
}

