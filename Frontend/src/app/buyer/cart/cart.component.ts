import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/products';
import { OrderService} from '../order.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  products:Product[]=[];
  carts:any;
  ngOnInit(){
    this.cartService.getItems('user/cart/'+this.FromRoute).subscribe(res=>{
      console.log(res);
      this.carts=res;
      console.log(this.carts);
      
    });
  }
  
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private cartService: CartService,
    private orderService:OrderService
  ) { }

  routeParams = this.route.snapshot.paramMap;
  FromRoute = String(this.routeParams.get('username'));

  // removeFromCart(product:Product){
  //   // this.cartService.remove(product);
  //   window.alert('Your product has been removed from the cart!');
  // }
  OrderPlaced(){
     // add logic to add this order to orders. 
    for(let i=0;i<this.carts.length;i++){
      this.products[i]=this.carts[i].products;
    }
    this.orderService.PlaceOrder('user/previousOrder/'+this.FromRoute,this.products).subscribe(res=>{})
    this.cartService.clearCart('user/cart/'+this.FromRoute).subscribe(res=>{});
    window.alert('Your order has been placed!');
    this.router.navigate(['/buyer',this.FromRoute]);
  }
  clearCart(){
    this.cartService.clearCart('user/cart/'+this.FromRoute).subscribe(res=>{});
    // this.items = this.cartService.getItems();
    this.router.navigate(['/buyer',this.FromRoute]);
    window.alert('Your cart has been cleared!');
  }
}
