import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import {OrderService} from '../order.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.css']
})
export class BuyerDashboardComponent implements OnInit {
  constructor(
    private orderService:OrderService,
    private router:Router,
    private route:ActivatedRoute)
    {}
  private routeParams = this.route.snapshot.paramMap;
  private FromRoute = String(this.routeParams.get('username'));
  
  previousOrder(){
    this.router.navigate(['/previous_order',this.FromRoute])
  }
  checkout(){
    this.router.navigate(['/buyer/cart',this.FromRoute])
    // console.log(this.router.navigate(['/buyer/cart',this.FromRoute]))
  }
  ngOnInit(): void {
    this.routeParams = this.route.snapshot.paramMap;
    this.FromRoute = String(this.routeParams.get('username'));
  }
}
