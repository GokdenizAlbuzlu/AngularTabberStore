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
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product: Article
  id: number;
  private sub: any;
  angForm: FormGroup;
  
  constructor(private dataService: ApiService, private router: ActivatedRoute,private fb:FormBuilder,private routing:Router ) {
    this.product = new Article(0, 'default', 0, 'default', 'default', 'default', 'default', 'default', 'default');
    this.id = 0;
    this.angForm = this.fb.group({
      Prix: ['', Validators.required],            //mettre les mêmes noms que les attributs form du .html
      Type: ['', Validators.required],
      Marque: ['', [Validators.required]],
      Titre: ['', Validators.required],
      Description: ['', Validators.required],
      Taille: ['', Validators.required],
      Genre: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.getProductDetails();
  }

  getProductDetails() {
    this.dataService.ProductDetails(this.id).pipe(first())
      .subscribe(
        data => {
          this.product = new Article(data.ID, data.ID_uti, data.Prix, data.Type, data.Marque, data.Titre, data.Description, data.Taille, data.Genre)
          console.log(data);
        },

        error => {
        });
  }

  modifyProductDetails(angForm:any) {
    if(confirm("Are you sure to modify this product ?")){
    this.dataService.modifyProduct(this.id,this.dataService.getTokenVendor(), angForm.value.Prix, angForm.value.Type, angForm.value.Marque, angForm.value.Titre, angForm.value.Description, angForm.value.Taille, angForm.value.Genre)
      .pipe(first())
      .subscribe(
        data => {

        },
        error => {
        });

        this.routing.navigate(['myproducts']);
  }


  }
}



