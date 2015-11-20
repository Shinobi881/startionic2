import {Firebase} from 'firebase/lib/firebase-web';
import {POLConfig} from '../common/data/pol.config';
// import {Http} from 'angular2/http';

// var angularfire = require('angularfire');
export class DBService
  constructor(polConfig:POLConfig){
    this.config = polConfig;
    this.$q = null;
    this.$fbo = null;
  }

  reportError = function (errObj) {
    console.error('getViewModel FAILED', errObj);
  }

  db() {
    var ref = new Firebase(this.config.db);
    return this.$fbo(ref);
  },

  bindToDB(scope, property) {
    // synchronize the object with a three-way data binding
    var ref = new Firebase(this.config.db);
    var syncObject = this.$fbo(ref);
    syncObject.$bindTo(scope, property);
    return syncObject;
  },

  getFBO(stateName) {
    var ref = new Firebase(this.config.db +'/'+ stateName);
    return this.$fbo(ref);
  },

  getViewModel(stateName) {
    var deferred = $q.defer();
    var ref = new Firebase(this.config.db +'/'+ stateName);

    ref.on('value', function (snapshot) {
      console.log('getViewModel', snapshot.val());
      var fbo = this.$fbo(ref);
      if (fbo) {
        deferred.resolve(fbo);
      } else {
        deferred.reject('Shit is fucked up!');
      }
    }, reportError);

    return deferred.promise;
  }
};
