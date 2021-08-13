import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any
  checkoutForm

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder) {

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    })
  }

  onSubmit(customerData: any) {
    console.warn('Your order has been submitted', customerData)

    this.items = this.cartService.clearItems()
    this.checkoutForm.reset()
  }

  clearItems() {
    this.items = this.cartService.clearItems()
    // @ts-ignore
    document.querySelector('.sum_inner').innerHTML = 0 + '$'
    // @ts-ignore
    document.querySelector('.check').innerHTML = '(' + 0 + ')'
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems()
    let i = 0

    for (let item in this.items) {
      i += this.items[item].price
    }
    // @ts-ignore
    document.querySelector('.sum_inner').innerHTML = String(i) + '$'
  }
}
