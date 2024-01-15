
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  notifications = [
    {
      img: 'assets/imgs/check1.png',
      title: 'Winter Special Offer',
      content: 'To Celebrate winter season we\'ll..'
    },
    {
      img: 'assets/imgs/check2.png',
      title: 'Buy 1 Get 1 for Dairy Product',
      content: 'Special for dairy product you\'ll get..'
    },
    {
      img: 'assets/imgs/check1.png',
      title: 'Get Cashback Up to 30%',
      content: 'Pay your order with grocery wallet..'
    },
    {
      img: 'assets/imgs/check2.png',
      title: 'Your Order Is Done!',
      content: 'Dear Jonh, thank you for ordering..'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  goBack() {

  }

}
