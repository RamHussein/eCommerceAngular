import { CartService } from './../../services/cart.service';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Data } from './../../models/Data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
data:Data[]=[]
  constructor(private DataService:DataService, private CartService:CartService) { }

  ngOnInit(): void {
    this.DataService.getData().subscribe(res=>{
      for(let index=0;index<res.length; index++){
        const post = res[index];
        post['quantity']=1;
        post['total']=1;
      }
      this.data=res;
    });

  }

}
