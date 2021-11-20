import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  addForm: FormGroup|any;
  cats: Category[] = [] ;
  prod: any;
  newProd = new Produit();

  constructor(private service: ProduitService, private route: Router, private serv: UserService) {
     
   }


  getCategories()
  {
     this.service.getCategories().toPromise()
    .then((response)=>{
      console.log(response)
      this.cats = response;  
    });
  }

  clickButton()
  {
    if(localStorage.getItem('update') as unknown as number == 1)
    {
      this.modifyProd();
      localStorage.removeItem('update');
    }
    else
    {
      this.ajoutProd();
    }
  }

  modifyProd()
  {
    this.newProd.name = this.addForm.get('name').value;
    this.newProd.montant = this.addForm.get('prix').value;
    this.newProd.categorie = this.addForm.get('category').value;
    this.newProd.description = this.addForm.get('description').value;
    this.service.udpdateProd(localStorage.getItem('ident') as unknown as number, this.newProd)
    .toPromise().then(()=>{
      this.route.navigate(['/shop']);
    });
  }

  ajoutProd()
  {
    this.newProd.name = this.addForm.get('name').value;
    this.newProd.montant = this.addForm.get('prix').value;
    this.newProd.categorie = this.addForm.get('category').value;
    this.newProd.description = this.addForm.get('description').value;
    this.service.addNewProduct(this.newProd).toPromise()
    .then(()=>{
      this.route.navigate(['/shop']);
      this.addForm.reset();
    });
  }
  ngOnInit(): void {
    const prodstr = localStorage.getItem('produit') as string;
     this.prod = JSON.parse(prodstr);
     console.log(this.prod)
    if(localStorage.getItem('update') as unknown as number == 1)
    {
      this.addForm = new FormGroup({
       name: new FormControl(this.prod.name),
       prix: new FormControl(this.prod.montant),
       category: new FormControl(this.prod.categorie),
       description: new FormControl(this.prod.description)
      });
    }
    else
    {
       this.addForm = new FormGroup({
       name: new FormControl(),
       prix: new FormControl(),
       category: new FormControl(),
       description: new FormControl()
    });
    }
    this.serv.getCurrentUser().toPromise()
    .then(()=>{
      this.getCategories();
    });
  }

}
