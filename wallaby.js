 module.exports = function (wallaby) {
   return {
     files: [
       'app/**/*.js',
        {pattern: 'node_modules/babel-polyfill/dist/polyfill.js', instrument: false}
     ],

     tests: [
       'tests/app/**/*.js'
     ],
     env: {
      type: 'node'
       //More options are described here
       //http://wallabyjs.com/docs/integration/node.html
     },
     delays: {
       run: 1000
     },
     compilers: {
      'app/**/*.js': wallaby.compilers.babel()
     },
     testFramework: 'mocha',
     setup: function (wallaby) {
         global.expect = require('chai').expect;
       // wallaby.testFramework is jasmine/QUnit/mocha object
        var mocha = wallaby.testFramework;
        mocha.ui('tdd');

        // setup sinon hooks
        var sinon = require('sinon');
        /*mocha.suite.beforeAll('sinon before', function() {
            if (null == this.sinon) {
                this.sinon = sinon.sandbox.create();
            }
        });
        mocha.suite.afterAll('sinon after', function() {
            if (this.sinon && 'function' === typeof this.sinon.restore) {
                this.sinon.restore();
            }
        });*/
       // you can access 'window' object in a browser environment,
       // 'global' object or require(...) something in node environment
     },
     workers: {recycle: true}
   };
 };