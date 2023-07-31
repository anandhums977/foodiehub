import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItems';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;


  constructor(private cartservice: CartService) {
    this.setCart();
  }

  ngOnInit(): void { }

  setCart(): void {
    this.cart = this.cartservice.getCart();
  }

  removeFromCart(cartItem: CartItem): void {
    this.cartservice.removeFromCart(cartItem.food.id)
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string): void {
    const quantity = parseInt(quantityInString);
    this.cartservice.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

}
