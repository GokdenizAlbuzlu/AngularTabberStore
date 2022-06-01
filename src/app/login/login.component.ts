import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
angForm: FormGroup;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
this.angForm = this.fb.group({
email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
pwd: ['', Validators.required]
});
}

ngOnInit() {
}
postdata(angForm:any)
{
this.dataService.userlogin(angForm.value.email,angForm.value.pwd)
.pipe(first())
.subscribe(
data => {
    console.log(data);
    if(data.message=='success'){
    this.dataService.getLoggedInName.emit(true);
    this.dataService.setToken(angForm.value.email);
    const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
    this.router.navigate(['dashboard']).then(() => {
    window.location.reload();
  });
    }else{
        if(data.message=='successvendor'){
            this.dataService.getLoggedInName.emit(true);
            this.dataService.setTokenVendor(angForm.value.email);
            const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
            this.router.navigate(['dashboard']).then(() => {
                window.location.reload();
              });
            
        
        
        }else{
    alert("user name or password is incorrect");
    }
}
},
error => {
alert("User name or password is incorrect")
});
}
get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }
}  