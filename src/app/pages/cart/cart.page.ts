
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

  cartItems: any[] = [];
  totalItems: number = 0;
  

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
    
    if (this.isikeranjang) {
      const jumlahdiceklis = this.isikeranjang.filter(item => item.checked).length;
      // Hapus berdasarkan produk yang di ceklis
      for (let i = jumlahdiceklis - 1; i >= 0; i--) {
        this.isikeranjang.splice(i, 1);
      }
      // Update Storage
      localStorage.setItem('cartItems', JSON.stringify(this.isikeranjang));
    }
  }


  //baru
  addToCart() {
    this.cartItems.push({ name: 'nama_produk', quantity: 1 });
    this.updateCart();
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.updateCart();
  }

  updateCart() {
    this.totalItems = this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  loadCart() {
    const storedCart = localStorage.getItem('cartItems');
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];
    this.totalItems = this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }
}
