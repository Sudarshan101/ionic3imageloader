import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ImgcacheService } from '../global/services';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class OfflineApp {

  @ViewChild('nav') nav: Nav;

  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              imgcacheService: ImgcacheService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // initialize imgCache library and set root
      imgcacheService.initImgCache().then(() => {
        this.nav.setRoot(this.rootPage);
      });
    });
  }
}
