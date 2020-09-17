import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { FiltersComponent } from './components/shopping/filters/filters.component';
import { ProductListComponent } from './components/shopping/product-list/product-list.component';
import { CartComponent } from './components/shopping/cart/cart.component';
import { CartItemComponent } from './components/shopping/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping/product-list/product-item/product-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { AutumnComponent } from './components/seasons/autumn/autumn.component';
import { HomeComponent } from './components/home/home.component';
import { SummerComponent } from './components/seasons/summer/summer.component';
import { WinterComponent } from './components/seasons/winter/winter.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    AutumnComponent,
    HomeComponent,
    SummerComponent,
    WinterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
