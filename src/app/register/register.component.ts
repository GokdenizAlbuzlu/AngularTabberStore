import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
angForm: FormGroup;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
this.angForm = this.fb.group({

nom: ['', Validators.required],            //mettre les mêmes noms que les attributs form du .html
prenom: ['', Validators.required],
email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
pwd: ['', Validators.required],
ville: ['', Validators.required],
cp: ['', Validators.required]

});
}

ngOnInit() {
}

postdata(angForm:any)
{
    if(!this.angForm.value.nom ||! this.angForm.value.prenom || !this.angForm.value.email || !this.angForm.value.pwd||!this.angForm.value.ville||!this.angForm.value.cp){
        alert("please complete all the required fields");

    }else{
this.dataService.userregistration(angForm.value.nom,angForm.value.prenom,angForm.value.email,angForm.value.pwd,angForm.value.ville,angForm.value.cp)
.pipe(first())
.subscribe(
data => {
alert("your account has been created successfully. You can now login")
this.router.navigate(['login']);
},

error => {
});
}
}
get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }
get name() { return this.angForm.get('name'); }
}