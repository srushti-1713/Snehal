// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  name: string;
  price: number;
  
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(item: CartItem): void {
    const currentItems = this.cartItemsSubject.getValue();
    this.cartItemsSubject.next([...currentItems, item]);
  }

  removeFromCart(index: number): void {
    const currentItems = this.cartItemsSubject.getValue();
    currentItems.splice(index, 1);
    this.cartItemsSubject.next([...currentItems]);
  }
  clearCart(): void {
    this.cartItemsSubject.next([]); 
  }


  getTotal(): number {
    return this.cartItemsSubject.getValue().reduce((sum, item) => sum + item.price, 0);
  }

  getCount(): number {
    return this.cartItemsSubject.getValue().length;
  }
}
