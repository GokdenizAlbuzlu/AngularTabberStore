export class Vendors {
    public ID: number;              
    public Entreprise : string;
    public AdresseCommercial: any;
    public NumeroTVA: any;
    public Numregistrecommerce: any;
    public PhoneNumber : number;
    public pwd:any;
    public email:any;
    public Ville: string;
    public CodePostal: number;


    constructor(ID:number,Entreprise:string,AdresseCommercial:any,NumeroTVA:any,Numregistrecommerce:any,PhoneNumber:number,pwd:any,email:any,Ville:string,CodePostal:number) {
        this.ID = ID;
        this.Entreprise=Entreprise;
        this.AdresseCommercial=AdresseCommercial;
        this.NumeroTVA=NumeroTVA;
        this.Numregistrecommerce=Numregistrecommerce;
        this.PhoneNumber=PhoneNumber;
        this.email = email;
        this.pwd = pwd;
        this.Ville=Ville;
        this.CodePostal=CodePostal;
        }
}