import {DBService} 'db.service'
var SCService = function(DBService){
  var soundCloud = {};


export class SCService
  constructor(dbService:DBService){
    this.soundCloud = [];
    
  }
  
  var rawSCData = [];
  
  // Reformat any data for usage
  scCleaner(jsonArr, cleanDataArr) {
    // angular.copy(jsonArr, cleanDataArr);
    jsonArr.forEach(function(obj){      
      obj.user.permalink_url = obj.user.permalink_url.replace('http', 'https');
      obj.created_at = obj.created_at.replace(/\//g, '-');
      obj.created_at = obj.created_at.slice(0, 10);

      cleanDataArr.push(obj);
    });
  };

  // Normalizes the data for our media collection
  soundCloud.scNormalize = function (dest) {
    rawSCData.forEach(function(scObj){
      dest.push({
        stream_id: scObj.user.permalink_url + '/' + scObj.permalink,
        title: scObj.title,
        date: scObj.created_at,
        thumb: scObj.user.avatar_url,
        icon: 'ion-android-volume-up'
      });
    });
  };

  // Call the DB, clean and normalize the data, push into media collection
  soundCloud.mergeSCData = function (collection) {
    return  DBService.getViewModel('media')
            .then(function (media){
              soundCloud.scCleaner(media.soundcloud, rawSCData);   
            })
            .then(function () {
              soundCloud.scNormalize(collection);
              console.log('Soundcloud, $scope.allMedia.length: ', collection.length);
            });
  };


  return soundCloud;
};

module.exports = SCService;