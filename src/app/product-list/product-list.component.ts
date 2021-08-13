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
    const toggle = document.querySelector('.toggle')
    // @ts-ignore
    this.visibility ? toggle.innerHTML = 4 + ' carts' : toggle.innerHTML = 3 + ' carts'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
