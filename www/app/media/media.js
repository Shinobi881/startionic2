import {Page} from 'ionic/ionic';
import {DataService} from '../service/data';
import './media.scss';

@Page({
  templateUrl: 'app/media/media.html'
})
export class Media {
  constructor(dataService: DataService) {
    this.media = null;
    this.soundcloud = null;
  }

  onInit() {
    this.soundcloud = this.dataService.getSoundcloud();
    // let speakerList = this.speakers = this.dataService.getSpeakers();
    // let talks = [];
    // let speakers = [];
  }

  

  
}
