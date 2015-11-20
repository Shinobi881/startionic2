import {NavController, Page, SearchBar} from 'ionic/ionic';
import {DataService} from '../service/data';
import './media.scss';

@Page({
  templateUrl: 'app/media/media.html',
  directives: [SearchBar]
})
export class Media {
  constructor(nav: NavController, dataService: DataService) {
    this.nav = nav;
    this.dataService = dataService;
    this.media = null;
    this.soundcloud = null;
    // this.playMedia = null;
    this.options = null;
  }


  //////////// MEDIA PLAYER START /////////////////
  // Sets the Cordova InAppBrowser Options
  onInit() {
    this.soundcloud = this.dataService.getSoundcloud();
    document.addEventListener("deviceready", onDeviceReady, false);
  // Calls the ngCordova inAppBrowser plugin to play media 
    function onDeviceReady() {
        window.open = cordova.InAppBrowser.open;
    }
    // let speakerList = this.speakers = this.dataService.getSpeakers();
    // let talks = [];
    // let speakers = [];
  }

  options = {
      location: 'no',
      clearcache: 'yes',
      toolbar: 'no',
      closebuttoncaption: 'close',
      hardwareback: 'yes'
  };

  
  playMedia(object) {
      let url = object.source;
      document.addEventListener("deviceready", onDeviceReady, false);
      // Calls the ngCordova inAppBrowser plugin to play media 
      function onDeviceReady() {
          window.open = cordova.InAppBrowser.open;
      }
    console.log("Logging this", object);
    cordova.InAppBrowser.open(url, '_blank', options);

  };
      // let x = 5;
      // let playThis = this.stream.stream_id;

      // $cordovaInAppBrowser.
      //     open(playThis, '_blank', options)
      //     .then(function(event) {
      //         // success
      //         console.log('Success', event);
      //     })
      //     .catch(function(event) {
      //         // error
      //         console.log('Error', event);
      //     });
  
  //////////// MEDIA PLAYER END /////////////////


  

  
}
