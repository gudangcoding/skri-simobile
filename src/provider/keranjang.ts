// src/app/services/cart.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Keranjang {
  private cartKey = 'cartItems';

  constructor() {}

  addToCart(item: string) {
    const currentCart = this.getCartItems();
    currentCart.push(item);
    this.saveCartItems(currentCart);
  }

  getCartItems(): string[] {
    const cartData = localStorage.getItem(this.cartKey);
    return cartData ? JSON.parse(cartData) : [];
  }

  private saveCartItems(items: string[]) {
    localStorage.setItem(this.cartKey, JSON.stringify(items));
  }
}
