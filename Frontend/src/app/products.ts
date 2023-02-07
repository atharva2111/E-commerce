import { Optional } from "@angular/core";



export interface Product {
  
  name: string;
  price: number;
  description: string;
  sellername:Optional;
}

export const products = [
  {
    id: 1,
    name: 'iPhone',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Samsung',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Standard Phone',
    price: 299,
    description: ''
  }
];




