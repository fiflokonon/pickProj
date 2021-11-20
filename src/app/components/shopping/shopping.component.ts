import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor(private service: ProduitService, private route: Router) { }
  data: any = {};
  currentUser: any;
  getShop()
  {
    this.service.getShop().toPromise()
    .then((response)=>{
      this.data = response;
    })
  }

  updateQuantity(code : number, quantity: any)
  {
    this.service.updateShop(code, quantity.target.value).toPromise()
    .then(()=>{
    }).catch((reason: any)=>{
      console.log(reason);
    });
  }

  deleteFromShop(id: number)
  {
    this.service.deleteFromShop(id).toPromise()
    .then(()=>{
      this.getShop();
    });
  }
 
  addButton()
  {
    this.route.navigate(['/produits']);
  }
  ngOnInit(): void {
    const userstr = localStorage.getItem('current') as string;
    this.currentUser = JSON.parse(userstr);
    this.getShop();
  }

}
