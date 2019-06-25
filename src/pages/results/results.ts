import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataStoreProvider} from '../../providers/data-store/data-store';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  totalResult: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataStoreProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage')
    this.totalResult = this.data.grandTotal;
  }
 
  
  openHome()
  {
    this.data.reset();
    this.navCtrl.push(HomePage);
  }

}
