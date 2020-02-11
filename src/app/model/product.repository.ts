import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductRepository {
  private products: Product[];
  private cartProducts: Product[];
  private categories: string[];

  constructor(private staticDSource: StaticDataSource) {
    staticDSource.getProducts().subscribe(data => {
      this.products = data;
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

  addProductToCart(productId: number): Product {
    var p = this.products.find(x => x.id == productId);
    this.cartProducts.push(p);
  }

  removeProductFromCart(productId: number): Product {
    this.cartProducts = this.cartProducts.filter(x => x.id != productId);
  }

  getCategories(): string[] {
    return this.categories;
  }
}
