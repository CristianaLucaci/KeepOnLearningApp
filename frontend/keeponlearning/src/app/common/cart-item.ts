import { Offer } from "./offer";

export class CartItem {
    id: string;
    name: string;
    imageUrl: string;
    participants: number;
    quantity: number;

    constructor(offer: Offer){
        this.id = offer.id;
        this.name = offer.name;
        this.imageUrl = offer.imageUrl;
        this.participants = offer.participants;

        this.quantity = 1;
    }
}
