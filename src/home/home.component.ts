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
      'Go','Levis','Adidas','Robe','Nike','Jordan','Tommy Hilfiger','Calvin Klein','Homme','Femme','Robe','Sac','Zara','HM','Lacoste','Hugo Boss'
   ]
  Products: Article[];
  angForm: FormGroup;
  filter:any
  constructor(private dataService: ApiService, private router: Router, private fb: FormBuilder) {
    this.searchInput="";
    this.Products = []
    this.angForm = this.fb.group({
    keyword: ['', Validators.required]
     
    });
  }


  ngOnInit(): void {
    this.filter='not'
    this.getData();
  }

  priceDescfilter():void{
    this.filter='pricedesc'
    this.getData();
  }

  getData(): void {
      this.dataService.dispProducts(this.dataService.getToken(),this.filter)    //si utilisateur alors on a pas de critères d'affichages
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





