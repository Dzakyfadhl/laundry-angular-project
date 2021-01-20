import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(private router:Router, private msg:MessageService) { }

  ngOnInit(): void {
  }

  login(){
    if (this.username && this.password) {
      if (this.username == 'admin' && this.password == 'admin') {
        this.router.navigateByUrl('/admin')
      }else if (this.username == 'cashier' && this.password == 'cashier') {
        this.router.navigateByUrl('/cashier')
      }
    }else{
      this.msg.add({severity:'error', summary:'Login Failed', detail:'Please input username and password!'});
    }
  }

}
