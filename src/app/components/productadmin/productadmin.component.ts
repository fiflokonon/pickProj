import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-productadmin',
  templateUrl: './productadmin.component.html',
  styleUrls: ['./productadmin.component.css']
})
export class ProductadminComponent implements OnInit {

prods : Produit[]|any;

  constructor(private route: Router, private service: ProduitService) { }

  addButton()
  {
    this.route.navigate(['/form']);
  }
  
  getAllProd()
  {
    this.service.getProducts().toPromise()
    .then((response)=>{
      this.prods = response;
    })
  }

  deleteProd(id: number)
  {
    this.service.deleteProduct(id).toPromise()
    .then(()=>{
      this.getAllProd();
    });
  }

  updateProd(id: number)
  {
    localStorage['update']= 1;
    localStorage['ident'] = id;
    this.service.getOneProduct(id).toPromise()
    .then((response)=>{
      localStorage['produit'] = JSON.stringify(response);
      this.route.navigate(['/form']);
    })
  }

  ngOnInit(): void {
    this.getAllProd();
    
  }

}
