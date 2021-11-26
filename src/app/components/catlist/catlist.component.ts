import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-catlist',
  templateUrl: './catlist.component.html',
  styleUrls: ['./catlist.component.css']
})
export class CatlistComponent implements OnInit {

  constructor(private service: ProduitService) { }
  data = new Category;
  cats: Category[] = [];
  catForm: FormGroup|any;

  getCategories()
  {
    this.service.getCategories().toPromise()
    .then((response)=>{
      console.log(response);
      this.cats = response;
    })
  }
   
  addCategory()
  {
    if(this.catForm.dirty)
    {
      this.data.name = this.catForm.get('name').value;
      this.data.description = this.catForm.get('description').value;
      this.service.addCategory(this.data).toPromise()
      .then(()=>{
      });
    }
    else
    {
      alert('Veuillez renseigner les champs du formulaire');
    }
  }

  deleteCat(id: any)
  {

  }

  updateCat(id: any)
  {

  }

  addButton()
  {
    
  }

  ngOnInit(): void {

    this.catForm = new FormGroup({
      name: new FormControl(),
      description : new FormControl()
    })
  }

}
