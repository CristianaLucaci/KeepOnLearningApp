import { Offer } from "./offer";

export class CartItem {
    id: string;
    name: string;
    imageUrl: string;
    participants: number;
    professorName: string;
    quantity: number;
    description: string;

    constructor(offer: Offer){
        this.id = offer.id;
        this.name = offer.name;
        this.imageUrl = offer.imageUrl;
        this.participants = offer.participants;
        this.description = offer.description;
        this.professorName = offer.professorName;

        this.quantity = 1;
    }
}
