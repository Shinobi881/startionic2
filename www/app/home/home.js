import {NavController, Page, SearchBar, Modal} from 'ionic/ionic';
// import {DataService} from '../service/data';
// import {SessionDetail} from '../session-detail/session-detail';
// import {FilterSchedules} from '../filter-schedules/filter-schedules';
// import {ScheduleList} from '../components/schedule-list';

@Page({
  templateUrl: 'app/home/home.html',
  // directives: [ScheduleList, SearchBar]
})
export class Home {
  constructor(nav: NavController) {
    this.nav = nav;
    
  }

}
