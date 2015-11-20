import {NavController, Page, SearchBar} from 'ionic/ionic';
import {DataService} from '../service/data';
// import {InAppBrowser} from '/../../plugins/cordova-plugin-inappbrowser/src/browser';
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
  //   document.addEventListener("deviceready", onDeviceReady, false);
  // // Calls the ngCordova inAppBrowser plugin to play media 
  //   function onDeviceReady() {
  //       window.open = cordova.InAppBrowser.open;
  //   }
    // let speakerList = this.speakers = this.dataService.getSpeakers();
    // let talks = [];
    // let speakers = [];
      document.addEventListener("deviceready", onDeviceReady, false);
      // Calls the ngCordova inAppBrowser plugin to play media 
      function onDeviceReady() {
          window.open = cordova.InAppBrowser.open;
          console.log(cordova);
      }
  }

  // options = {
  //     location: 'no',
  //     clearcache: 'yes',
  //     toolbar: 'no',
  //     closebuttoncaption: 'close',
  //     hardwareback: 'yes'
  // };


  
  playMedia(object) {
    let options = 'toolbar=yes,clearcache=yes,resizable=yes,status=yes, close=yes,minimizable=yes,closebuttoncaption=close, hardwarebackbutton=yes'; 
      

    let url = 'https://soundcloud.com/siriusxm-news-issues/attorney-john-burns-on-bankruptcy-50-cent-is-definitely-not-broke-he-is-not-stupid?in=siriusxm-news-issues/sets/partyoflincoln';
    // console.log("Logging this", object);
    console.log('Logging this', cordova);
    window.open(url,
      '_blank', options);
    // cordova.InAppBrowser.open(url, '_blank', options);

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
