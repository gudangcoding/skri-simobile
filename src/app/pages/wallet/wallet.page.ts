
import { DummyService } from './../../services/dummy.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  transaction = [];
  constructor(private navCtrl: NavController, private dummy: DummyService) {
    this.transaction = this.dummy.transaction;
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
