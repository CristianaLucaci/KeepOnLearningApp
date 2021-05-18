import {OfferCategory} from "./offer-category";

export class Offer {
    id: string;
    professorName: string;
    name: string;
    description: string;
    participants: number;
    imageUrl: string;
    active: boolean;
    placesAvailable: number;
    category: OfferCategory;
}


