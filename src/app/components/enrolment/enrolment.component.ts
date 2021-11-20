import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-enrolment',
  templateUrl: './enrolment.component.html',
  styleUrls: ['./enrolment.component.css']
})
export class EnrolmentComponent implements OnInit {

  constructor(private service: UserService, private route: Router) { }

  user = new User();
  enrolForm: FormGroup|any;

  enrolUser()
  {
    if(this.enrolForm.dirty)
    {
      if(this.enrolForm.get('password').value == this.enrolForm.get('cpassword').value)
      {
        console.log(this.enrolForm.get('firstName').value);
        this.user.lastName = this.enrolForm.get('lastName').value;
        this.user.firstName = this.enrolForm.get('firstName').value;
        this.user.userName = this.enrolForm.get('userName').value;
        this.user.email = this.enrolForm.get('email').value;
        this.user.phoneNumber = this.enrolForm.get('phone').value;
        this.user.password = this.enrolForm.get('password').value;
        this.service.userSignup(this.user).toPromise()
        .then(()=>{
          this.route.navigate(['/connexion']);
        });
      }
      else
      {
        alert('Mots de passe différents!!');
      }
    }
    else
    {
      alert('Formulaire vide!!');
    }
    
  }

  ngOnInit(): void {
    
    this.enrolForm = new FormGroup({
      lastName: new FormControl(),
      firstName: new FormControl(),
      userName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      password: new FormControl(),
      cpassword: new FormControl()
    });
  }

}
