import { previousOrder } from './../previousOrder';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products';
import { OrderService} from '../order.service'

@Component({
  selector: 'app-previous-order',
  templateUrl: './previous-order.component.html',
  styleUrls: ['./previous-order.component.css']
})
export class PreviousOrderComponent implements OnInit {
  items:any;

  private routeParams = this.route.snapshot.paramMap;
  private FromRoute = String(this.routeParams.get('username'));
  
  previousOrders:any
  
  constructor(
    private orderService:OrderService,
    private route:ActivatedRoute,
    
    ){}
  ngOnInit(): void {
    this.orderService.getOrder('user/previousOrder/'+this.FromRoute).subscribe(orders=>{
      // console.log(orders);
      this.previousOrders=orders;
      // console.log(this.previousOrders[0].products)
    });
    
  }
  
}
