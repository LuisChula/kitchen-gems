import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  quantity: number = 1;

  buy() {
    alert("Bought " + this.quantity + " item(s)");
  }

}
