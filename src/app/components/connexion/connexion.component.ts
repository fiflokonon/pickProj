import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connectForm: FormGroup|any;
  data: any = {};
  dat : any = {};
  token: string|any;
  currentUser = new User();

  constructor(private route: Router, private service: UserService) { }

  signin()
  {
    if(this.connectForm.dirty)
    {
      this.data.usernameOrEmail = this.connectForm.get('emailuser').value;
      this.data.password = this.connectForm.get('pass').value;
      console.log(this.data);
      this.service.userSignin(this.data).toPromise()
      .then((response)=>{
        this.token = response;
        localStorage['head'] = JSON.stringify(this.token);
        alert('Connexion réussie');
        this.service.getCurrentUser().toPromise()
        .then((response)=>{
          this.currentUser = response;
          this.service.getCurrentRole().toPromise()
          .then((response)=>{
            this.dat = response;
            this.currentUser.role = this.dat.name;
            if(this.currentUser.role == 'ROLE_ADMIN')
            {
              this.route.navigate(['/adminpage']);
            }
            else
            {
              this.route.navigate(['/produits']);
            }
          });
          localStorage['current'] = JSON.stringify(this.currentUser);
        });
      })
      .catch(()=>{
        alert('Nom d\'utilisateur ou mot de passe incorrect');
      });
    }
  }

  ngOnInit(): void {
    this.connectForm = new FormGroup({
      emailuser: new FormControl(),
      pass: new FormControl()
    });
  }

}
