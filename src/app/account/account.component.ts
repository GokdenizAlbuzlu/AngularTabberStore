import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';
import { Users } from '../users';
import { Vendors } from '../vendor';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
users:Users
vendors : Vendors
angForm: FormGroup;
constructor(private fb:FormBuilder, private dataService:ApiService,private router:Router) {
  this.users=new Users(0,'default','default','default','default','default',0);
  this.vendors=new Vendors(0,'default','default','default','default',0,'default','default','default',0);
  this.angForm=this.fb.group({
    nom: ['', Validators.required],            
    prenom: ['', Validators.required],
    Entreprise: ['',Validators.required],
    adressecommercial: ['',Validators.required],
    numerotva: ['',Validators.required],
    numregistrecommerce: ['',Validators.required],
    phonenumber: ['',Validators.required],
    ville: ['',Validators.required],
    cp: ['',Validators.required]
  });
 }

vendor:any
user:any

  ngOnInit() {
    this.postdata();
  }


postdata(){
if (this.dataService.isLoggedIn()){
this.user=true;
this.vendor=false;
this.dataService.sendMail(this.dataService.getToken())
.pipe(first())
.subscribe(
  data => {
    console.log(data); 
    this.users = new Users(data.id,data.nom,data.prenom,'',data.email,data.Ville,data.CodePostal);
    },
    error => {
    });
    }

if (this.dataService.isLoggedInVendor()){
  this.user=false;
  this.vendor=true;
  this.dataService.sendMail(this.dataService.getTokenVendor())
  .pipe(first())
  .subscribe(
    data => {
      console.log(data);  
      this.vendors=new Vendors(data.id,data.entreprise,data.adresse,data.numerotva,data.numregistre,data.telephone,'',data.email,data.Ville,data.CodePostal);
      },
      error => {
      });
      }  
  }

modifydata(angForm:any){
  if(confirm("Are you sure to modify your informations ?")){
  if (this.vendor==true){
  this.dataService.modifyAccountInfovendor(angForm.value.Entreprise,angForm.value.adressecommercial,angForm.value.numerotva,angForm.value.numregistrecommerce,angForm.value.phonenumber,this.dataService.getTokenVendor(),angForm.value.ville,angForm.value.cp)
  .pipe(first())
  .subscribe(
    data =>{

      this.router.navigate(['home']);
    },
    error =>{
    });
}
if(this.user==true){
  this.dataService.modifyAccount(angForm.value.nom,angForm.value.prenom,this.dataService.getToken(),angForm.value.ville,angForm.value.cp)
  .pipe(first())
  .subscribe(
    data =>{
     
    },
    error =>{
    });

    this.router.navigate(['home']);

}

}
}
}

