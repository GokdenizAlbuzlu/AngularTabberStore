import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';
import { Article } from '../article';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  Products: Article[];
  constructor(private dataService: ApiService, private router: Router) {
    this.Products = []
  }

  ngOnInit(): void {
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
