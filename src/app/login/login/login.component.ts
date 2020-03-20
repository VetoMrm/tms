import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  valid(name:string,password:string):boolean{
    if(name=='faiz'&& password=='faiz'){
      alert("login success")
      return true;
    }
    else{
      return false;
    }
  }
}
