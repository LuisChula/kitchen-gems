import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProduct(id: string) {
    return this.http.get('assets/' + id + '/product.json');
  }
  
}
