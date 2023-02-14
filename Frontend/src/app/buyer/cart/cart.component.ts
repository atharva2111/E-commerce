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
  items = this.cartService.getItems();
  ngOnInit(){}

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private cartService: CartService,
    private orderService:OrderService
  ) { }

  routeParams = this.route.snapshot.paramMap;
  FromRoute = String(this.routeParams.get('username'));

  removeFromCart(product:Product){
    this.cartService.remove(product);
    window.alert('Your product has been removed from the cart!');
  }
  OrderPlaced(){
     // add logic to add this order to orders. 
    this.orderService.PlaceOrder('user/previousOrder/'+this.FromRoute,this.cartService.getItems()).subscribe(res=>{})
    this.cartService.clearCart();
    window.alert('Your order has been placed!');
    this.router.navigate(['/buyer',this.FromRoute]);
  }
  clearCart(){
    this.cartService.clearCart();
    this.items = this.cartService.getItems();
    this.router.navigate(['/buyer',this.FromRoute]);
    window.alert('Your cart has been cleared!');
  }
}
