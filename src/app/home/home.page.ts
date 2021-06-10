import { Component } from '@angular/core';
import { NavParams } from '@ionic/angular/directives/navigation/nav-params';
import { NavController } from '@ionic/angular/providers/nav-controller';

import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  nextPage() {
    this.navCtrl.push(SignupPage);
  }
}
