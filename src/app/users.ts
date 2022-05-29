
export class Users {        //une classe pour chaque table de notre bdd
public ID: number;              //on créer un attribut pour chaque colonne de notre bdd
public nom: string;
public prenom: string;
public pwd:string;
public email:string;
public ville: string;
public cp: number;

constructor(ID:number,nom: string,prenom :string,pwd:string,email:string,ville:string,cp:number) {
this.ID = ID;
this.nom = nom;
this.prenom=prenom;
this.pwd = pwd;
this.email = email;
this.ville=ville;
this.cp=cp;
}

}