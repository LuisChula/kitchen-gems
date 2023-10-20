import { Component, OnInit, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  quantity: number = 1;
  data: any;
  moreInfo: any[] = [];

  constructor(private productService: ProductService, private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.productService.getProduct().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

  buy() {
    alert("Bought " + this.quantity + " item(s)");
  }

}
