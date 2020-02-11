import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from './store/store.module';
import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
//import { ListComponent } from './list/list.component';
//import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [ AppComponent, 
  //HomeComponent, ListComponent, UserComponent 
  ],
  imports:      [ BrowserModule, FormsModule,  HttpClientModule,StoreModule ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
