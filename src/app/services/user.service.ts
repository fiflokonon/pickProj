import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  user : any;
  tok: string|any;

  private readonly ULR_Api = `http://192.168.0.179:5000/api`;

  userSignup( data: any)
  {
    console.log('INSCRIPTION');
    const url = `${this.ULR_Api}/auth/signup`;
    return this.http.post<User>(url, data);  
  }

  userSignin(data: any)
  {
    console.log('CONNEXION');
    const url = `${this.ULR_Api}/auth/signin`;
    return this.http.post(url, data);
  }

  getCurrentUser():Observable<User>
  {
    console.log('GET THE ME');
    const url = `${this.ULR_Api}/user/me`;
    const tokenstr = localStorage.getItem('head') as string;
    this.tok = JSON.parse(tokenstr);
    const headers = {
      "Authorization" : "Bearer "+ this.tok.accessToken
    }
    localStorage['token'] = this.tok.accessToken;
    return this.http.get<User>(url, {
      headers
    });
  }

  getCurrentRole()
  {
    console.log('GET THE CURRENT ROLE')
    const url = `${this.ULR_Api}/user/me/role`;
    const headers = {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
    return this.http.get(url, {
      headers
    });
  }

  updateCurrentPasswd(data: any)
  {
    const url = `${this.ULR_Api}/user/me/password`;
    const headers = {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
    return this.http.put(url, data, {
      headers
    });
  }

  updateInfo(data: any)
  {
    const url = `${this.ULR_Api}/user/me`;
    const headers = {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
    return this.http.put(url, data, {
      headers
    });
  }
}
