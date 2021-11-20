import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-prodlist',
  templateUrl: './prodlist.component.html',
  styleUrls: ['./prodlist.component.css']
})
export class ProdlistComponent implements OnInit {

  constructor(private service: ProduitService) { }
  cats: Category[] = [];
  data: any;
  date : any = {};
 /* getByCat()
  {
    for( let cat of this.cats )
    {
      this.service.getProductByCategory().toPromise()
      .then((response)=>{
        this.data = response;
        console.log(this.data);
      });
    }
  }*/
  getProducts()
  {
    this.service.getProducts().toPromise()
    .then((response)=>{
      this.data = response;
      console.log(this.data);
    });
  }

  addToShop(id: number)
  {
    this.date.id = id;
    this.date.quantityProduct = 1;
    this.service.addToShop(this.date).toPromise()
    .then(()=>{
    }).catch(()=>{
      alert('Ce produit existe déjà dans le panier');
    });
  }

  ngOnInit(): void {
    /*this.service.getCategories().toPromise()
    .then((response)=>{
      this.cats = response;
    });*/
    this.getProducts();
  }

}
