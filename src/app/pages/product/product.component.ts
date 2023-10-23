import { Component, OnInit, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private productService: ProductService, private route: ActivatedRoute, private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.getProduct(id);
    }
  }

  getProduct(id: string) {
    this.productService.getProduct(id).subscribe((data) => {
      this.data = data;
    });
  }

  buy() {
    if (this.isValidQuantity(this.quantity)) {
      alert("Bought " + this.quantity + " item(s)");
    }
  }

  isValidQuantity(value: number): boolean {
    return value != null && /^\d+$/.test(value.toString()) && value > 0;
  }

}
