
import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { AccountComponent } from './account/account.component';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent {


    
loginbtn:boolean;
logoutbtn:boolean;
logvendor:boolean;




constructor(private dataService: ApiService) {
dataService.getLoggedInName.subscribe(name => this.changeName(name));
if(this.dataService.isLoggedIn())
{
console.log("loggedin");
this.loginbtn=false;
this.logoutbtn=true
this.logvendor=false;
}else{
    if (this.dataService.isLoggedInVendor()){
console.log("loggedinalsvendor");
this.logvendor=true;
this.loginbtn=false;
this.logoutbtn=true;
    }else{
this.logvendor=false;
this.loginbtn=true;
this.logoutbtn=false
}

}
}

private changeName(name: boolean): void {
this.logoutbtn = name;
this.loginbtn = !name;
}
logout()
{
if(confirm("Are you sure to logout?")){
this.dataService.deleteToken();
this.dataService.deleteTokenVendor();
window.location.href = window.location.href;
}

}
}