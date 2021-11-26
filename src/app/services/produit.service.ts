import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { 

  }

  private readonly API_URL=`http://192.168.0.103:5000/api`;


  addNewProduct(data: any)
  {
    console.log('PRODUCT CREATION');
    const url=`${this.API_URL}/product`;
    const headers = {
      "Authorization": "Bearer "+localStorage.getItem('token')
    }
    return this.http.post(url, data,{
       headers
    });
  }

  addProdImg(id: number , uploadImageData: FormData)
  {
    const url = `${this.API_URL}/upload/${id}`;
    const headers = {
      "Authorization": "Bearer "+localStorage.getItem('token') 
    }
    return this.http.post(url, uploadImageData, {
      reportProgress:true,
      responseType: 'text',
      observe: 'response'
    });
  }

  getProducts(): Observable<Produit[]>
  {
    console.log('GET ALL');
    const url = `${this.API_URL}/products`;
    const headers = {
      "Authorization": "Bearer "+localStorage.getItem('token') 
    }
    return this.http.get<Produit[]>(url, {
      headers
    });
  }

  getOneProduct(id: number)
  {
    console.log('PRODUCT RECUP');
    const url=`${this.API_URL}/product/${id}`;
    return this.http.get<Produit>(url);
  }

  getProductByCategory()
  {
    console.log('CAT PROD RECUP');
    const url = `${this.API_URL}/categories/products`;
    return this.http.get(url);
  }

  udpdateProd(id: number, data: any)
  {
    console.log('PROD MODIFY');
    const url = `${this.API_URL}/product/${id}`;
    const headers = {
      "Authorization": "Bearer "+localStorage.getItem('token')
    }
    return this.http.put(url, data,{
      headers
    })
  }

  deleteProduct(id: number)
  {
    console.log('PROD DEL');
    const url = `${this.API_URL}/product/${id}`;
    const headers = {
      "Authorization": "Bearer "+localStorage.getItem('token')
    }
    return this.http.delete(url, {
      headers
    });
  }

  getCategories()
  {
    const url = `${this.API_URL}/categories`;
    const headers = {
      "Authorization": "Bearer "+localStorage.getItem('token')
    }
    return this.http.get<any>(url, {
      headers
    });
  }

  addCategory( data: any)
  {
    const url = `${this.API_URL}/categorie`
    const headers = {
      "Authorization": "Bearer "+localStorage.getItem('token'),
    }
    return this.http.post(url, data, {
      headers
    });
  }

  updateCategory(id: number, data: any)
  {
    console.log('CAT MODIFY');
    const url = `${this.API_URL}/categories/${id}`;
    return this.http.put(url, data);
  }

  deleteCategory(id: number)
  {
    console.log('CAT DEL');
    const url = `${this.API_URL}/categories/${id}`;
    return this.http.delete(url);
  }

  getShop()
  {
    console.log('GET SHOP');
    const url = `${this.API_URL}/user/shop`;
    const headers = {
      "Authorization": "Bearer "+localStorage.getItem('token')
    }
    return this.http.get(url, {
      headers
    });
  }


  addToShop(data: any)
  {
    console.log('ADD TO SHOP');
    const url = `${this.API_URL}/orderItem`;
    const headers = {
      "Authorization": "Bearer "+localStorage.getItem('token')
    }
    return this.http.post(url, data,{
      headers
    });
  }

  updateShop(id: number, quantity: number)
  {
    let q = quantity as number;
    const url = `${this.API_URL}/orderItem/${id}/quantity/${q}`;
    const headers = {
      "Authorization": "Bearer "+localStorage.getItem('token')
    }
    return this.http.put(url,quantity, {
      headers
    });
  }

  deleteFromShop(id: number)
  {
    console.log('DEL FROM SHOP');
    const url = `${this.API_URL}/orderItem/${id}`;
    const headers = {
      "Authorization": "Bearer "+localStorage.getItem('token')
    }
    return this.http.delete(url, {
      headers
    });
  }
}
