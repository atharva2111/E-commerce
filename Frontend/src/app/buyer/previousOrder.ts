import { Product } from './../products';

export interface previousOrder{
    id:Number;
    user_id:Number;
    products:Product[]
}