import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  currentUser: any;

  constructor() { }

  ngOnInit(): void {
    const userstr = localStorage.getItem('current') as string;
    this.currentUser = JSON.parse(userstr);
  }

}
