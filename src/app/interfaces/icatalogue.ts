import { TypeProduit } from "../shared/services/produits.service";

export interface ICatalogue {
    Id: number,
    Title: string,
    Categorie: string,
    Price: number,
    Quantity: number,
    Taille: string[],
    Type: TypeProduit
    Image: string,
    ImageCheckout: string,
    SecImage: string,
    Description: string,
}
