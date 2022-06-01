import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';
import { Article } from '../article';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  Products: Article[];
  id: any;
  private sub: any;
  constructor(private dataService: ApiService, private router: ActivatedRoute) {
    this.Products = []
  }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe(params => {
    this.id = params['id']; 
    });
    this.SearchBar();
  }



  SearchBar() {
    this.dataService.searchProduct(this.id).pipe(first())
      .subscribe(
        data => { 
          let i = 0;
          for (i = 0; i < data.length; i++) {
            this.Products.push(new Article(data[i].ID, data[i].ID_uti, data[i].Prix, data[i].Type, data[i].Marque, data[i].Titre, data[i].Description, data[i].Taille, data[i].Genre))
          
          }
         console.log(data);
        },
        error => {
        });
  }




}
