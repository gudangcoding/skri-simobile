
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DummyService } from './../../services/dummy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-book',
  templateUrl: './order-book.page.html',
  styleUrls: ['./order-book.page.scss'],
})
export class OrderBookPage implements OnInit {

  products = [];

  constructor(private dummy: DummyService, private navCtrl: NavController, private router: Router) {
    this.products = this.dummy.products;
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  goToPayment() {
    this.router.navigate(['/payment-method']);
  }

}
