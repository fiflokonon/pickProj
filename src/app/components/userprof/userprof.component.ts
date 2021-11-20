import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userprof',
  templateUrl: './userprof.component.html',
  styleUrls: ['./userprof.component.css']
})
export class UserprofComponent implements OnInit {

  modif: any;
  currentUser: any
  data: any = {};
  user = new User();
  modiForm: FormGroup|any;

  constructor( private service: UserService, private route: Router) { 
    this.modif = 0;
  }
  clickModif()
  {
    if(this.modif== 0)
      {
        this.modif = 1;
      }
      else
      {
        this.modif = 0 ;
      }
  }

  updateMe()
  {
    console.log('UPD ME');
    if(this.modiForm.dirty)
    {
      this.user.lastName = this.modiForm.get('lastName').value;
      this.user.firstName = this.modiForm.get('firstName').value;
      this.user.phoneNumber = this.modiForm.get('phone').value;
      this.user.email = this.modiForm.get('email').value;
      this.user.userName = this.modiForm.get('userName').value;
      this.service.updateInfo(this.user).toPromise()
      .then((response)=>{
        localStorage['cuurrent']= response;
        alert('Mise à jour des informations réussie');
        this.route.navigate(['/userinfo']);
      });
      if(this.modif==1)
      {
        if(this.modiForm.get('newPass').value == this.modiForm.get('cnewPass').value)
        {
          this.data.currentPassword = this.modiForm.get('oldPass').value;
          this.data.newPassword = this.modiForm.get('newPass').value;
          this.service.updateCurrentPasswd(this.data).toPromise()
          .then(()=>{}).catch(()=>{
            alert('Echec de la mise à jour des informations');
          });
        }
        else
        {
          alert('Mots de passe incorrects');
          
        }
      }    
    }
  }

  ngOnInit(): void {
    const userstr = localStorage.getItem('current') as string;
    this.currentUser = JSON.parse(userstr);
    this.modiForm = new FormGroup({
      lastName: new FormControl(this.currentUser.lastName),
      firstName: new FormControl(this.currentUser.firstName),
      phone: new FormControl(this.currentUser.phoneNumber),
      email: new FormControl(this.currentUser.email),
      userName: new FormControl(this.currentUser.userName),
      oldPass: new FormControl(),
      newPass: new FormControl(),
      cnewPass: new FormControl()
    });

  }

}
