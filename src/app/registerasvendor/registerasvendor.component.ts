import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registerasvendor',
  templateUrl: './registerasvendor.component.html',
  styleUrls: ['./registerasvendor.component.css']
})
export class RegisterasvendorComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb:FormBuilder, private dataService:ApiService,private router:Router) {

    this.angForm=this.fb.group({

      Entreprise: ['',Validators.required],
      adressecommercial: ['',Validators.required],
      numerotva: ['',Validators.required],
      numregistrecommerce: ['',Validators.required],
      phonenumber: ['',Validators.required],
      email: ['',Validators.required],
      pwd: ['',Validators.required],
      ville: ['',Validators.required],
      cp: ['',Validators.required]
    });
   }

  ngOnInit(): void {
  }

  postdata(angForm:any){
    this.dataService.vendorregistration(angForm.value.Entreprise,angForm.value.adressecommercial,angForm.value.numerotva,angForm.value.numregistrecommerce,angForm.value.phonenumber,angForm.value.email,angForm.value.pwd,angForm.value.ville,angForm.value.cp)
    .pipe(first())
    .subscribe(
      data =>{
        this.router.navigate(['login']);
      },
      error =>{

      });
  }

}