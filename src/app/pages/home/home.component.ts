import { Component, OnInit } from '@angular/core';
import { ProductsListService } from 'src/app/services/products-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productsList: any;

  constructor(private productsListService: ProductsListService) {}

  ngOnInit(): void {
    this.getProdictsList();
  }

  getProdictsList() {
    this.productsListService.getList().subscribe((data) => {
      this.productsList = data;
    });
  }

}
