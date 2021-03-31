import { ShoppingItem } from './store/models/shopping-item.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private SHOPPING_URL = "http://localhost:3000/shopping";

  constructor(private http: HttpClient) { }

  getShoppingItems() {
    return this.http.get<ShoppingItem[]>(this.SHOPPING_URL).pipe(delay(500));
  }

  addShoppingItem(shoppingItem: ShoppingItem) {
    return this.http.post(this.SHOPPING_URL, shoppingItem).pipe(delay(500));
  }

  deleteShoppingItem(id: string) {
    console.log(`${this.SHOPPING_URL}/${id}}`);
    return this.http.delete(`${this.SHOPPING_URL}/${id}`).pipe(delay(500));
  }

}
