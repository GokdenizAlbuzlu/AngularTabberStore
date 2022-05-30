import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Article } from './article';
import { Vendors } from './vendor';


@Injectable({
    providedIn: 'root'
})

export class ApiService {
    redirectUrl!: string;
    baseUrl: string = "http://localhost/WE4B/ProjetWE4B/php";

    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

    constructor(private httpClient: HttpClient) { }



    public userregistration(nom: any, prenom: any, email: any, pwd: any, ville: any, cp: any) {
        return this.httpClient.post<any>(this.baseUrl + '/register.php', { nom, prenom, email, pwd, ville, cp })
            .pipe(map(Users => {
                return Users;
            }));
    }

    public userlogin(email: any, pwd: any) {
        //alert(email)
        return this.httpClient.post<any>(this.baseUrl + '/login.php', { email, pwd })
            .pipe(map(Users => {
                //this.setToken(Users.email);
                //this.getLoggedInName.emit(true);
                return Users;
            }));
    }

    public publishItem(ID_utilisateur: any, Prix: any, Type: any, Marque: any, Titre: any, Description: any, Taille: any, Genre: any) {

        return this.httpClient.post<any>(this.baseUrl + '/publish.php', { ID_utilisateur, Prix, Type, Marque, Titre, Description, Taille, Genre })
            .pipe(map(Users => {
                return Users;
            }));
    }

    public vendorregistration(Entreprise: any, AdresseCommercial: any, NumeroTVA: any, Numregistrecommerce: any, PhoneNumber: any, email: any, pwd: any, Ville: any, CodePostal: any) {
        return this.httpClient.post<any>(this.baseUrl + '/registerasvendor.php', { Entreprise, AdresseCommercial, NumeroTVA, Numregistrecommerce, PhoneNumber, email, pwd, Ville, CodePostal })
            .pipe(map(Vendor => {
                return Vendor;

            }));
    }
    public sendMail(email: any) {
        return this.httpClient.post<any>(this.baseUrl + '/account.php', { email })
            .pipe(map(Users => {
                return Users;
            }));
    }
    public MyProducts(email: any) {
        return this.httpClient.post<any>(this.baseUrl + '/myproducts.php', { email })
            .pipe(map(Users => {
                return Users;
            }));
    }
    public modifyAccountInfovendor(Entreprise: any, AdresseCommercial: any, NumeroTVA: any, Numregistrecommerce: any, PhoneNumber: any, email: any, Ville: any, CodePostal: any) {
        return this.httpClient.post<any>(this.baseUrl + '/modifyaccountvendor.php', { Entreprise, AdresseCommercial, NumeroTVA, Numregistrecommerce, PhoneNumber, email, Ville, CodePostal })
            .pipe(map(Vendors => {
                return Vendors;
            }));

    }
    public modifyAccount(nom: any, prenom: any, email: any, ville: any, cp: any) {
        return this.httpClient.post<any>(this.baseUrl + '/modifyaccount.php', { nom, prenom, email, ville, cp })
            .pipe(map(Users => {
                return Users;
            }));
    }
    public ProductDetails(ID:any){
        return this.httpClient.post<any>(this.baseUrl + '/productdetails.php', {ID})
        .pipe(map(Article => {
            return Article;
        }));
}
    public modifyProduct(ID:any,ID_utilisateur:any, Prix: any, Type: any, Marque: any, Titre: any, Description: any, Taille: any, Genre: any){
        return this.httpClient.post<any>(this.baseUrl + '/modifyproduct.php', {ID,ID_utilisateur,Prix, Type, Marque, Titre, Description, Taille, Genre })
        .pipe(map(Article => {
            return Article;
        }));
    }

    public dispProducts(email:any){
        return this.httpClient.post<any>(this.baseUrl + '/home.php', { email })
            .pipe(map(Users => {
                return Users;
            }));

    }

    public searchProduct(keyword:any){
        return this.httpClient.post<any>(this.baseUrl + '/search.php', {keyword})
        .pipe(map(Article => {
            return Article;
        }));
    }

    


    //token
    setToken(token: string) {
        localStorage.setItem('token', token);
    }
    setTokenVendor(token: string) {
        sessionStorage.setItem('token', token);
    }
    getTokenVendor() {
        return sessionStorage.getItem('token')
    }
    deleteTokenVendor() {
        sessionStorage.removeItem('token');
    }
    getToken() {
        return localStorage.getItem('token');
    }
    deleteToken() {
        localStorage.removeItem('token');
    }
    isLoggedIn() {
        const usertoken = this.getToken();
        if (usertoken != null) {
            return true
        }
        return false;
    }
    isLoggedInVendor() {
        const vendortoken = this.getTokenVendor();
        if (vendortoken != null) {
            return true
        }
        return false;
    }

}