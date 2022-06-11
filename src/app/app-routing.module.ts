import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { PublishComponent } from './publish/publish.component';
import { RegisterasvendorComponent } from './registerasvendor/registerasvendor.component';
import { AccountComponent } from './account/account.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UserproductdetailsComponent } from './userproductdetails/userproductdetails.component';
import { SearchComponent } from './search/search.component';
import { PanierComponent } from './panier/panier.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PriceascComponent } from './priceasc/priceasc.component';
import { PricedescComponent } from './pricedesc/pricedesc.component';


const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'registration', component: RegisterComponent },
{ path: 'dashboard',component:DashboardComponent,canActivate:[AuthguardGuard] },
{ path: 'publish',component:PublishComponent,canActivate:[AuthguardGuard]},
{path : 'registerasvendor',component:RegisterasvendorComponent},
{path : 'account',component:AccountComponent,canActivate:[AuthguardGuard]},
{path : 'myproducts',component:MyproductsComponent,canActivate:[AuthguardGuard]},
{path : 'productdetails/:id',component:ProductdetailsComponent,canActivate:[AuthguardGuard]},
{path : 'userproductdetails/:id',component:UserproductdetailsComponent,canActivate:[AuthguardGuard]},
{path : 'search/:id',component:SearchComponent},
{path : 'panier',component:PanierComponent,canActivate:[AuthguardGuard]},
{path : 'aboutus',component:AboutusComponent},
{path : 'priceasc',component:PriceascComponent},
{path :'pricedesc',component:PricedescComponent}


]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule {}