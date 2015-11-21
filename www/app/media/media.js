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
  }


  //////////// MEDIA PLAYER START /////////////////
  onInit() {
    this.soundcloud = this.dataService.getSoundcloud();
  }
  
  playMedia(object) {
    console.log("Logging this", object);
    
    // Sets the Cordova InAppBrowser Options
    let options = 'toolbar=1,clearcache=1,location=0,closebuttoncaption=done, hardwarebackbutton=1';       

    let url = object.source;
    window.open(url,'_blank', options);

  };
  
  //////////// MEDIA PLAYER END /////////////////


  

  
}
