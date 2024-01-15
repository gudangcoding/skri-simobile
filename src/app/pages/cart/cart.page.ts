
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
    this.isikeranjang = JSON.parse(localStorage.getItem('cartItems'));
    localStorage.setItem('cartItems', JSON.stringify(this.isikeranjang))
  }

  ngOnInit() {
    // this.loadkeranjang();
  }

  loadkeranjang() {
    this.isikeranjang;
  }

  goToOrderBook() {
    this.router.navigate(['/order-book']);
  }


  checkAll() {
   
    this.isikeranjang.forEach(item => (item.checked = !item.checked));
  }

  delall() {
    const storedItems = JSON.stringify(this.isikeranjang);
    for (let index = 0; index < this.isikeranjang.length; index++) {
      // console.log(index);
      localStorage.removeItem(this.isikeranjang[index]);
      // console.log(this.isikeranjang[index].id_produk);
      // this.deleteItemById(this.isikeranjang[index].id_produk);

    }
  }

  deleteItemById(itemId: number) {

    if (this.isikeranjang) {
      const storedItems = JSON.parse(this.isikeranjang);

      // Find the index of the item with the specified ID
      const index = storedItems.findIndex((item: any) => item.id_produk === itemId);

      // Remove the item if found
      if (index !== -1) {
        storedItems.splice(index, 1);
        // Save the updated data back to Local Storage
        localStorage.setItem('cartItems', JSON.stringify(storedItems));
      }
    }
  }

  deleteAllItems() {
    let total = this.isikeranjang.forEach(item => (item.checked = true)).length;
  
    // Get current data from Local Storage
    const storedItemsString = localStorage.getItem('cartItems');
    if (storedItemsString) {
      const storedItems = JSON.parse(storedItemsString);
      const checkedCount = storedItems.filter(item => item.checked).length;
      console.log(checkedCount);

      // Loop through each item and remove it
      for (let i = checkedCount - 1; i >= 0; i--) {
        storedItems.splice(i, 1);
      }

      // Save the updated data back to Local Storage
      localStorage.setItem('cartItems', JSON.stringify(storedItems));
    }
  }
}
