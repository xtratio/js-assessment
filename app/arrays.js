exports = typeof window === 'undefined' ? global : window;
exports.arraysAnswers = {
  indexOf: function (arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        return i;
      }
    }
    return -1;
  },

  sum: function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    return sum;
  },

  remove: function (arr, item) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != item) {
        res[res.length] = arr[i];
      }
    }
    return res;
  },

  removeWithoutCopy: function (arr, item) {
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }
    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    var c = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        c++;
      }
    }
    return c;
  },

  duplicates: function (arr) {
    var dubs = [];
    var has = {};
    for (var i = 0; i < arr.length; i++) {
      has[arr[i]] = has[arr[i]] ? has[arr[i]] + 1 : 1;
    }
    for (var p in has) {
      if (has.hasOwnProperty(p) && has[p] > 1) {
        dubs.push(parseInt(p));
      }
    }
    return dubs;
  },

  square: function (arr) {
    return arr.map(item => item * item);
  },

  findAllOccurrences: function (arr, target) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        res.push(i);
      }
    }
    return res;
  }
};
