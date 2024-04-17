export interface FlatSale {
  id: number;
  title: string;
  number_rooms: number;
  price: number;
  type_building: string;
  floor: number;
  area: number;

  country: string;
  city: string;
  address: string;
  region: string
  number_flat: number;
  main_photo: string;
  photo: string[];
  description: string;

  owner_name: string;
  owner_contact: string;
}
