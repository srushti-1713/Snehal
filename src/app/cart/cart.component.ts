import { Component } from '@angular/core';
import { CartService, CartItem } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.cartService.cartItems$.subscribe((items: CartItem[]) => {
      this.cartItems = items;
    });
  }

  removeItem(index: number): void {
    this.cartService.removeFromCart(index);
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  // ✅ Add this method here
  checkout(): void {
    alert('Booking confirmed! We will contact you shortly.');
    this.cartService.clearCart(); // Optional: clear cart after confirmation
  }
}
