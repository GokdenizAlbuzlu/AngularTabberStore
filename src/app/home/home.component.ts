import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';
import { Article } from '../article';
import { SearchPipe } from '../search.pipe';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchInput: string;
  public AutoCompleteProducts = [
      'Tshirt','Pantalon','Veste','Chaussure','Accessoires',
      'Go','Levis','Adidas','Robe','Nike','Jordan'
   ]
  Products: Article[];
  angForm: FormGroup;
  constructor(private dataService: ApiService, private router: Router, private fb: FormBuilder) {
    this.searchInput="";
    this.Products = []
    this.angForm = this.fb.group({
      keyword: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    this.getData();
  }


  getData(): void {
    if (this.dataService.isLoggedInVendor()) {        //si vendeur l'affichage va être différent, on va pas proposer au vendeur d'acheter ses propres produits
      this.dataService.dispProducts(this.dataService.getTokenVendor())
        .pipe(first())
        .subscribe(
          data => {
            let i = 0;
            for (i = 0; i < data.length; i++) {
              this.Products.push(new Article(data[i].ID, data[i].ID_uti, data[i].Prix, data[i].Type, data[i].Marque, data[i].Titre, data[i].Description, data[i].Taille, data[i].Genre))
              console.log(this.Products[0].Prix);
            }
            console.log(data);
          },

          error => {
          });
    } else {
      this.dataService.dispProducts(this.dataService.getToken())    //si utilisateur alors on a pas de critères d'affichages
        .pipe(first())
        .subscribe(
          data => {
            let i = 0;
            for (i = 0; i < data.length; i++) {
              this.Products.push(new Article(data[i].ID, data[i].ID_uti, data[i].Prix, data[i].Type, data[i].Marque, data[i].Titre, data[i].Description, data[i].Taille, data[i].Genre))
              console.log(this.Products[0].Prix);
            }
            console.log(data);
          },

          error => {
          });
    }


  }

  SearchBar(angForm: any) {
    this.dataService.searchProduct(angForm.value.keyword).pipe(first())
      .subscribe(
        data => {
         console.log(data);
        },

        error => {
        });
  }

}


