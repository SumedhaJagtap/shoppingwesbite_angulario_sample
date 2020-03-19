import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
        private cartService: CartService,
        private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    })
   }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData){
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    console.warn('Your order has been submitted', customerData);
  }
}