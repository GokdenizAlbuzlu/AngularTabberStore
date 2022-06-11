import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';
import { Article } from '../article';
import { SearchPipe } from '../search.pipe';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchInput: string;
  public AutoCompleteProducts = [
    'Tshirt', 'Pantalon', 'Veste', 'Chaussure', 'Accessoires',
    'Go', 'Levis', 'Adidas', 'Robe', 'Nike', 'Jordan', 'Tommy Hilfiger', 'Calvin Klein', 'Homme', 'Femme', 'Robe', 'Sac', 'Zara', 'HM', 'Lacoste', 'Hugo Boss'
  ]
  Products: Article[];
  angForm: FormGroup;
  filter: any
  Tshirt: any
  Chaussure: any
  Robe: any
  Veste: any
  Pantalon: any
  Accesoire: any
  Sac: any
  Short: any



  constructor(private dataService: ApiService, private router: Router, private fb: FormBuilder) {
    this.searchInput = "";
    this.Products = []
    this.angForm = this.fb.group({
      keyword: ['', Validators.required]

    });
  }


  ngOnInit(): void {


    this.filter = 'not'
    this.getData();
    this.filterTshirt();
    this.filterRobes();
    this.filterChaussures();
    this.filterVeste();
    this.filterPantalon();
    this.filterAccessoires();
    this.filterSac();
    this.filterShort();


  }


  getData(): void {
    this.dataService.dispProducts(this.dataService.getToken(), this.filter)    //si utilisateur alors on a pas de critères d'affichages
      .pipe(first())
      .subscribe(
        data => {
          let i = 0;
          for (i = 0; i < data.length; i++) {
            this.Products.push(new Article(data[i].ID, data[i].ID_uti, data[i].Prix, data[i].Type, data[i].Marque, data[i].Titre, data[i].Description, data[i].Taille, data[i].Genre))
          }

        },

        error => {
        });
  }

  filterTshirt(): void {
    this.dataService.Filter('Tshirt').pipe(first())
      .pipe(first())
      .subscribe(
        data => {
          if (data.message == 'successTshirts') {
            this.Tshirt = true;
          }
        },
        error => {
        });
  }
  filterRobes(): void {
    this.dataService.Filter('Robe').pipe(first())
      .pipe(first())
      .subscribe(
        data => {
          if (data.message == 'successRobes') {
            this.Robe = true;
          }
        },
        error => {
        });
  }
  filterChaussures(): void {
    this.dataService.Filter('Chaussure').pipe(first())
      .pipe(first())
      .subscribe(
        data => {
          if (data.message == 'successChaussures') {
            this.Chaussure = true;
          }
        },
        error => {
        });

  }

  filterVeste(): void {
    this.dataService.Filter('Veste').pipe(first())
      .pipe(first())
      .subscribe(
        data => {
          if (data.message == 'successVestes') {
            this.Veste = true;
          }
        },
        error => {
        });

  }

  filterPantalon(): void {
    this.dataService.Filter('Pantalon').pipe(first())
      .pipe(first())
      .subscribe(
        data => {
          if (data.message == 'successPantalons') {
            this.Pantalon = true;
          }
        },
        error => {
        });

  }

  filterAccessoires(): void {
    this.dataService.Filter('Accessoire').pipe(first())
      .pipe(first())
      .subscribe(
        data => {
          if (data.message == 'successAccessoires') {
            this.Accesoire = true;
          }
        },
        error => {
        });

  }

  filterSac(): void {
    this.dataService.Filter('Sac').pipe(first())
      .pipe(first())
      .subscribe(
        data => {
          if (data.message == 'successSacs') {
            this.Sac = true;
          }
        },
        error => {
        });

  }

  filterShort(): void {
    this.dataService.Filter('Short').pipe(first())
      .pipe(first())
      .subscribe(
        data => {
          if (data.message == 'successShorts') {
            this.Short = true;
          }
        },
        error => {
        });

  }


}
