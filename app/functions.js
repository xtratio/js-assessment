exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this,arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj,arguments);
  },

  functionFunction: function(str) {
    return function(str2){
       return str+", "+str2;
    }
  },

  makeClosures: function(arr, fn) {
      return arr.map(function(item){
        return function(){
          return fn(item);
        }
      });
  },

  partial: function(fn, str1, str2) {
    return function(suffix){
      return fn(str1, str2, suffix);
    }
  },

  useArguments: function() {
    var arr = [].slice.call(arguments);
    return arr.reduce(function(prev, cur, i){
      return prev + cur;
    });
  },

  callIt: function(fn) {
    var arr = [].slice.call(arguments, 1, arguments.length);
    fn.apply(null, arr);
  },

  partialUsingArguments: function(fn) {
    var pars = [].slice.call(arguments, 1, arguments.length);
    return function(){
      return fn.apply(null,pars.concat([].slice.call(arguments)));
    }
  },

  curryIt: function(fn) {
    function collectArgs(args,count){
      return function(arg){
        args.push(arg);
        if(args.length == count){
          return fn.apply(null, args);
        }

        return collectArgs(args, count);
      }
    }
    return collectArgs([],fn.length);
  }
};
