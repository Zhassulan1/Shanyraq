export interface User {
    id: number;
    username: string;
}

export interface Property {
    id: number;
    title: string;
    type: string;
    price: string;
    area: number;
    rooms_count: number;
    description: string;
    main_img: string; 
    img: string; 
    parameters: Record<string, any>; 
}

export interface Listing {
    id: number;
    user: User;
    property: Property;
    type: string;
    listing_date: string; 
    status: 'Active' | 'Not Active'; 
}

export interface Favorites {
    id: number;
    user: User;
    listing: Listing;
}