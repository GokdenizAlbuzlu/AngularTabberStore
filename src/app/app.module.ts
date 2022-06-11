import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PublishComponent } from './publish/publish.component';
import { RegisterasvendorComponent } from './registerasvendor/registerasvendor.component';
import { AccountComponent } from './account/account.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UserproductdetailsComponent } from './userproductdetails/userproductdetails.component';
import { SearchComponent } from './search/search.component';
import { SearchPipe } from './search.pipe';
import { PanierComponent } from './panier/panier.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PricedescComponent } from './pricedesc/pricedesc.component';
import { PriceascComponent } from './priceasc/priceasc.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PublishComponent,
    RegisterasvendorComponent,
    AccountComponent,
    MyproductsComponent,
    ProductdetailsComponent,
    UserproductdetailsComponent,
    SearchComponent,
    SearchPipe,
    PanierComponent,
    AboutusComponent,
    PricedescComponent,
    PriceascComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
