import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CartSummaryComponent } from "./cartsummary.component";
import { CartDetailComponent } from "./cartdetail.component";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule , RouterModule],
  declarations: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent
  ],
  exports: [StoreComponent]
})
export class StoreModule {}
