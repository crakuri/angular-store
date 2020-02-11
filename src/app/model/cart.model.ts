import { Product } from "./product.model";
import { Injectable } from "@angular/core";

@Injectable()
export class Cart {
  public lines: CartLine[] = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;

  addLine(product: Product, quantity: number = 1) {
    let line = this.lines.find(line => line.product.id == product.id);
    console.log(product);
    if (line != undefined) {
      line.quantity += quantity;
    } else {
      this.lines.push(new CartLine(product, quantity));
    }
    this.recalculate();
  }
  updateQuantity(product: Product, quantity: number = 1) {
    let line = this.lines.find(x => x.product.id == product.id);
    if (line != undefined) {
      line.quantity = quantity;
    }
    this.recalculate();
  }
  removeLine(id: number) {
    let index = this.lines.findIndex(x => x.product.id == id);
    this.lines.splice(index, 1);
    this.recalculate();
  }
  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }
  recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    console.log(this.lines);
    this.lines.forEach(x => {
      this.itemCount += x.quantity;
      this.cartPrice += (x.product.price * x.quantity);
    });
  }
}

@Injectable()
export class CartLine {
  constructor(public product: Product, public quantity: number) {}
}
