import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';
import { Article } from '../article';
import { of } from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  Products: Article[];
  totalprice:number;
  constructor(private dataService: ApiService, private router: Router) {
    this.Products = []
    this.totalprice=0

  }
  ngOnInit(): void {
    this.getData();
    
  }

  getData() {
    this.dataService.DisplayUserCart(this.dataService.getToken()).pipe(first())
      .subscribe(
        data => {
          let i = 0;
          for (i = 0; i < data.length; i++) {
            this.Products.push(new Article(data[i].ID, data[i].ID_uti, data[i].Prix, data[i].Type, data[i].Marque, data[i].Titre, data[i].Description, data[i].Taille, data[i].Genre))
            this.totalprice=this.totalprice+Number(data[i].Prix);
          }
          console.log(data);
        },

        error => {
        });



  }

  supressFromCart(ID_article:any){
    if(confirm("Are you sure to remove this article from your cart ?")){
    this.dataService.SupressFromCart(this.dataService.getToken(),ID_article).pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['panier']).then(() => {
          window.location.reload();
        });
        console.log("this item is removed from your cart");
      },
      error => {
      });

  }
  }
}


