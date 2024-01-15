
import { Router } from '@angular/router';
import { DummyService } from './../../services/dummy.service';
import { Component, OnInit } from '@angular/core';
import { Sesi } from 'src/provider/Sesi';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  isikeranjang: any = [];
  products = [];

  constructor(private dummy: DummyService, private router: Router, private sesi: Sesi) {
    this.products = this.dummy.products;


  }

  ngOnInit() {
    this.loadkeranjang();
  }

  goToOrderBook() {
    this.router.navigate(['/order-book']);
  }
  loadkeranjang() {
    this.isikeranjang =JSON.parse( localStorage.getItem('cartItems'));
    // for (const item of this.isikeranjang) {
    //   this.products.push(item);

    // }

console.log(this.isikeranjang);

  }

}
