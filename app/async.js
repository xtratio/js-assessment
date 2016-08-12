exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve,reject)=>{
      setTimeout(()=> {
        resolve(value)
      }, 1);
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open("get", url, true);
      xhr.onload = function() {
        if(this.status == 200){
          var peopleNames = JSON.parse(this.response).people.map((item) => item.name);
          resolve(peopleNames.sort());
        }
        else{
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      
      xhr.onerror = ()=>{
        reject(new Error("Network error"))
      };
      
      xhr.send();
    });
  }
};
