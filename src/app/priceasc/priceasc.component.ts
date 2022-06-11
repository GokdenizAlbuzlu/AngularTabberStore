import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';
import { Article } from '../article';
import { SearchPipe } from '../search.pipe';
@Component({
  selector: 'app-priceasc',
  templateUrl: './priceasc.component.html',
  styleUrls: ['./priceasc.component.css']
})
export class PriceascComponent implements OnInit {
  Products: Article[]=[]
  filter:any='priceasc'
  constructor(public dataService:ApiService) { }

  ngOnInit(): void {
    this.getData()
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
