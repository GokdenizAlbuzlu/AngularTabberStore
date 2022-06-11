import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';
import { Users } from '../users';
import { Vendors } from '../vendor';
import { Article } from '../article';

@Component({
  selector: 'app-userproductdetails',
  templateUrl: './userproductdetails.component.html',
  styleUrls: ['./userproductdetails.component.css']
})
export class UserproductdetailsComponent implements OnInit {
  product: Article
  id: number;
  vendor:any;
  private sub: any;
 
  
  constructor(private dataService: ApiService, private router: ActivatedRoute,private fb:FormBuilder,private routing:Router ) {
    this.product = new Article(0, 'default', 0, 'default', 'default', 'default', 'default', 'default', 'default');
    this.id = 0;
  }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.getProductDetails();
  }

  getProductDetails():void{
    this.dataService.ProductDetails(this.id).pipe(first())
      .subscribe(
        data => {
          this.product = new Article(data.ID, data.ID_uti, data.Prix, data.Type, data.Marque, data.Titre, data.Description, data.Taille, data.Genre)
          this.vendor=data.Entreprise
          console.log(data);
        },
        error => {
        });

  }

  AddtoCart(ID_article:any):void{
    alert(this.product.Titre + " is added to your cart !");
    this.routing.navigate(['home']);
    this.dataService.addProductToCart(this.dataService.getToken(),ID_article).pipe(first())
    .subscribe(
      data => {
        console.log("this item is added to your cart");
      },
      error => {
      });

  }

}
