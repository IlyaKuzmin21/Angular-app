import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products
  visibility: boolean = false

  toggle() {
    this.visibility = !this.visibility
    if (this.visibility) {
      // @ts-ignore
      document.querySelector('.toggle').innerHTML = 4 + ' carts'
    } else {
      // @ts-ignore
      document.querySelector('.toggle').innerHTML = 3 + ' carts'
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
