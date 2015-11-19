import {NavController, Page} from 'ionic/ionic';
import {DataService} from '../service/data';
// import {SpeakerDetail} from '../speaker-detail/speaker-detail';
// import {SessionDetail} from '../session-detail/session-detail';

@Page({
  templateUrl: 'app/news/news.html'
})
export class News {
  constructor(nav: NavController, dataService: DataService) {
    this.nav = nav;
    this.speakers = null;
    this.scheduleInfo = null;
    this.dataService = dataService;
  }

  onInit() {
    this.scheduleInfo = this.dataService.getSchedule();
    let speakerList = this.speakers = this.dataService.getSpeakers();
    let talks = [];
    let speakers = [];
  }


}
