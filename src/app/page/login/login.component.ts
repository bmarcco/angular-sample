import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    })
  }

  login(){
    const data = this.loginForm.getRawValue();
    if(this.loginForm.valid && data.username == 'office@angular.com' && data.password == 'admin'){
      this.router.navigate(['/home'])
      console.log("Usešna prijava");
      localStorage.setItem("username",data.username)
    }else{
      console.log("Greška prilikom prijave");
    }
  }

}
