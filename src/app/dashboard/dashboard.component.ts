import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  auth:any;
  auth2:any;
  constructor(private router:Router) { }

  ngOnInit(): void {

    this.auth=localStorage.getItem('token');
    this.auth2=sessionStorage.getItem('token');

    if((!this.auth)&&(!this.auth2)){   //si il n'est pas connecté on le redirige à la page de co
      this.router.navigate(['/login']);
    }


  }

}
