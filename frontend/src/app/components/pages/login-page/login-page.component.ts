import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginform!:FormGroup
  isSubmitted=false

  constructor(private formBuilder:FormBuilder){}

  ngOnInit():void{
    this.loginform = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }

  get fc(){
    return this.loginform.controls
  }

  submit(){
    this.isSubmitted = true
    if(this.loginform.invalid) return
    console.log(`email:${this.fc.email.value}`)
  }

}
