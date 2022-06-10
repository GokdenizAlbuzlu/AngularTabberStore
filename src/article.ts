
export class Article {        //une classe pour chaque table de notre bdd
    public ID: number;              //on créer un attribut pour chaque colonne de notre bdd
    public ID_utilisateur : string;
    public Prix: number;
    public Type: string;
    public Marque: string;
    public Titre: string;
    public Description: string;
    public Taille : string;
    public Genre: string;
    public Quantite : number = 0
    
    constructor(ID:number,ID_utilisateur: string, Prix: number,Type: string,Marque: string,Titre:string,Description:string,Taille : string,Genre: string){
    this.ID = ID;
    this.ID_utilisateur = ID_utilisateur;
    this.Prix=Prix;
    this.Type = Type;
    this.Marque = Marque;
    this.Titre=Titre;
    this.Description=Description;
    this.Taille=Taille;
    this.Genre=Genre;
    }
    }