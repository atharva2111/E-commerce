import { Component } from '@angular/core';
import { Product } from 'src/app/products';
import { OrderService} from '../order.service'

@Component({
  selector: 'app-previous-order',
  templateUrl: './previous-order.component.html',
  styleUrls: ['./previous-order.component.css']
})
export class PreviousOrderComponent {
  items = this.orderService.getOrder();
  constructor(private orderService:OrderService){}
  
}
