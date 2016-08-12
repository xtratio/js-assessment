exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var arr = [];
    var dirs = [];
    function iterateFiles(d){
      if(d && d.files){
        dirs.push(d.dir);
        d.files.forEach(function(element) {
          if(typeof(element) == "string")
          {
            if( !dirName || dirs.indexOf(dirName) > -1)
            {
              arr.push(element);
            }
          }
          else{
            iterateFiles(element);
          }
        }, this);
      }
      dirs.pop();
    }

    iterateFiles(data);

    return arr;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
