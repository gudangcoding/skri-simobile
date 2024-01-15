
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.page.html',
  styleUrls: ['./payment-status.page.scss'],
})
export class PaymentStatusPage implements OnInit {

  status = 'success';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToTabs() {
    this.router.navigate(['/tabs']);
  }

}
