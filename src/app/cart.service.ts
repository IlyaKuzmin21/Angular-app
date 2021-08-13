import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = []

  addToCart(product: any) {
    let i: number = 0
    // @ts-ignore
    this.items.push(product)
    for (let number in this.items) {
      i += 1
    }
    // @ts-ignore
    document.querySelector('.check').innerHTML = '(' + i + ')'
  }

  getItems() {
    return this.items
  }

  clearItems() {
    this.items = []
    return this.items
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json')
  }

  constructor(
    private http: HttpClient,
  ) {
  }
}
