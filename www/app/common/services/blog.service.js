'use strict';
var BlogService = function ($http) {

  // var test = function (resp) {
  //   console.log('BlogService \ttest: ', resp);
  // };

  var onFetchSuccess = function (resp) {
    var msg = (resp.data.responseStatus >= 400) ? 'BAD' : 'good';
    console.log('BlogService', msg, resp);
  };

  var onFetchError = function (resp) {
    console.error('BlogService', resp);
  };

  var _vm = {
    requests: null,
    blogs: null
  };


  return {
    fetch: function (rssUrls) {
      console.log('fetch: ', rssUrls);
      _vm.requests = rssUrls;
      angular.forEach(_vm.requests, function (elem){
        var params = {
          v: '2.0',
          num: 50,
          callback: 'JSON_CALLBACK',
          q: encodeURIComponent(elem)
        };
        $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load', {params: params})
          .then(onFetchSuccess, onFetchError);
      });
    }
  };
};

module.exports = BlogService;
