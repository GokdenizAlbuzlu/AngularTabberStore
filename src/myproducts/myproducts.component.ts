import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';
import { Article } from '../article';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit {
  myArr1: Article[];
  constructor(private dataService: ApiService, private router: Router) {
    this.myArr1 = []
  }

  ngOnInit(): void {
    this.postdata();
  }

  postdata() {
    this.dataService.MyProducts(this.dataService.getTokenVendor())
      .pipe(first())
      .subscribe(
        data => {
          let i = 0;
          for (i = 0; i < data.length; i++) {
            this.myArr1.push(new Article(data[i].ID, data[i].ID_uti, data[i].Prix, data[i].Type, data[i].Marque, data[i].Titre, data[i].Description, data[i].Taille, data[i].Genre))
            console.log(this.myArr1[0].Prix);




          }
          console.log(data);            //bien réflechir ici 


        },

        error => {
        });
  }


}



