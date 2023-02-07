import { UserLoginService } from 'src/app/user-login.service';
import { Product } from './../../products';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { myProductService } from '../my-products.service';


@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit{
  products:Product[]=[]
  constructor(private route: ActivatedRoute,
    private router:Router,
    private myProducts:myProductService,
    private loginService:UserLoginService,
    )
    {}
  endpoint:string="sellers"
  sellername:string=""
  ngOnInit() {
    
    const routeParams = this.route.snapshot.paramMap;
    const FromRoute = String(routeParams.get('sellername'));
    this.sellername=FromRoute;
    
    this.myProducts.getMyProducts(this.endpoint+"/"+FromRoute).subscribe(seller=>{
      this.products=seller.products;
    })
    
  }
  addProducts(){
    this.router.navigate(['/sellers/addProducts',this.sellername])
  }
  removeProduct(name:string){
    this.myProducts.removeProduct("products"+"/"+name).subscribe(res=>{window.location.reload()}) 
  }
  updateProduct(product:Product){
    this.router.navigate(['/update',product.name])
    this.myProducts.updateProduct('product',product).subscribe(res=>{})
  }

  

}
