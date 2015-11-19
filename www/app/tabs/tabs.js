import {NavController, Page} from 'ionic/ionic';
import {DataService} from '../service/data';
import {About} from '../about/about';
import {Media} from '../media/media';
import {Home} from '../home/home';
import {News} from '../news/news';

@Page({
  templateUrl: 'app/tabs/tabs.html',
  providers: [DataService]
})
export class Tabs {
  constructor(nav: NavController, dataService: DataService) {
    // set the root pages for each tab
    this.tab1Root = Home;
    this.tab2Root = News;
    this.tab3Root = Media;
    this.tab4Root = About;

    // retrieve the conference data
    dataService.retrieveData();
  }
}
