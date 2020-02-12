import { Injectable } from "@angular/core";
import { Product } from "./product.model";
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private cartProducts: Product[] = [];
  private categories: string[];

  constructor(private dataSource: RestDataSource) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      console.log(data);
      this.categories = data
        .map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }

  getProducts(category: string): Product[] {
    return this.products.filter(
      x => x.category == category || category == null
    );
  }

  getProduct(productId: number): Product {
    return this.products.find(x => x.id == productId);
  }

  addProductToCart(productId: number) {
    var p = this.products.find(x => x.id == productId);
    this.cartProducts.push(p);
  }

  removeProductFromCart(productId: number) {
    this.cartProducts = this.cartProducts.filter(x => x.id != productId);
  }

  getCategories(): string[] {
    return this.categories;
  }

  saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      this.dataSource
        .saveProduct(product)
        .subscribe(p => this.products.push(p));
    } else {
      this.dataSource.updateProduct(product).subscribe(p => {
        this.products.splice(
          this.products.findIndex(p => p.id == product.id),
          1,
          product
        );
      });
    }
  }
  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(p => {
      this.products.splice(this.products.findIndex(p => p.id == id), 1);
    });
  }
}
