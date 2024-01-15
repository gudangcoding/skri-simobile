
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.page.html',
  styleUrls: ['./payment-method.page.scss'],
})
export class PaymentMethodPage implements OnInit {

  cardNumber: any = '4242********4242';
  number;

  constructor(private navCtrl: NavController, private router: Router) {
    this.number = this.cardNumber.split('');
    console.log(this.number);
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  goToPaymentStatus() {
    this.router.navigate(['/payment-status']);
  }

}
