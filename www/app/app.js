import {App, Platform} from 'ionic/ionic';
import {Tabs} from './tabs/tabs';
import './app.scss';

@App({
  templateUrl: 'app/app.html'
})
class ConferenceApp {
  constructor(platform: Platform) {
    this.root = Tabs;

    // when the platform is ready
    platform.ready().then(() => {

    });

    

  }

}
