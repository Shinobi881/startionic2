'use strict';


var YTService = function (DBService) {
  var youTube = {};
  
  var rawYTData = [];
  youTube.data = [];

  // Reformat any data for usage
  youTube.ytCleaner = function (jsonArr, cleanDataArr) {
    jsonArr.forEach(function(obj) {      
      obj.snippet.publishedAt = obj.snippet.publishedAt.slice(0,10);
      cleanDataArr.push(obj);
    });
  };

  // Normalizes the data for our media collection
  youTube.ytNormalize = function (dest) {
    rawYTData.forEach(function(ytObj) {
      dest.push({
        stream_id: 'https://www.youtube.com/embed/' + ytObj.id.videoId,
        title: ytObj.snippet.title,
        date: ytObj.snippet.publishedAt,
        thumb: ytObj.snippet.thumbnails.default.url,
        icon: 'ion-social-youtube'
      });  
    });
  };

  // Call the DB, clean and normalize the data, push into media collection
  youTube.mergeYTData = function (collection) {
    return  DBService.getViewModel('media')
            .then(function (media) {
              youTube.ytCleaner(media.youtube, rawYTData);   
            })
            .then(function () {
              youTube.ytNormalize(collection);
              console.log('You Tube, $scope.allMedia.length: ', collection.length);
            });
  };

  return youTube;
};

module.exports = YTService;