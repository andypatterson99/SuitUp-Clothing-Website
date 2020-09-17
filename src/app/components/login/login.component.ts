import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

model: any = {}

  constructor() { }

  ngOnInit(): void {
  }
    login(){
      console.log(this.model)
    }
}
