import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})

export class PublishComponent implements OnInit {
  url: any;
	msg = "";
  angForm: FormGroup;
  file=new FormControl('');
  file_data:any='';
  defaultImage:any;
  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router, public http: HttpClient) {
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
  ngOnInit() {
    this.defaultImage=true;
  }

  
  uploadFile(event:any){
    console.log('1');
    let elem = event.target;
    if(elem.files.length>0){
      console.log(elem.files[0]);
      let formData = new FormData();
      formData.append('file', elem.files[0]);

      this.http.post('http://localhost/WE4B/ProjetWE4B/php/test.php', formData).subscribe((data) => {
        console.log('Got some data from backend ', data);
      }, (error) => {
        console.log('Error ', error);
      })
      var reader = new FileReader();
		  reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result; 
      this.defaultImage=false;
      }
    }
  }

  postdata(angForm: any) {
    this.dataService.publishItem(this.dataService.getTokenVendor(), angForm.value.Prix, angForm.value.Type, angForm.value.Marque, angForm.value.Titre, angForm.value.Description, angForm.value.Taille, angForm.value.Genre)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['home']);
        },
        error => {
        });
  }
}
