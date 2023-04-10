import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true })
    } else {
      confirmPassword.setErrors(null);
    }

  }
  userForm: FormGroup;
  dataSource = new MatTableDataSource<any>();
  displayColumns = ['ime','prezime','email','password','action'];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [0, [Validators.required]],
      firstName: ["", [Validators.required]],
      secondName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]]
    }, {
      validator: this.passwordMatchValidator
    }
    )
    this.dataSource.data = JSON.parse(localStorage.getItem('userForm'));
  }

  save(){
    const userData: any[] = [];

    const data = this.userForm.getRawValue();
    if(this.userForm.valid){
      data.id =Math.floor(1000 * Math.random());
      if(localStorage.getItem('userForm') === null){
        userData.push(data); 
        console.log("UserData",userData)
        console.log("UserDataString",JSON.stringify(userData))
        localStorage.setItem('userForm',JSON.stringify(userData))
      }else{
        const localData= JSON.parse(localStorage.getItem('userForm'));
        localData.push(data);
        localStorage.setItem('userForm',JSON.stringify(localData))
      }
      this.userForm.reset();
      this.userForm.get('id').setValue(0);
      console.log(this.userForm.getRawValue())
      this.dataSource.data = [];
      this.dataSource.data = JSON.parse(localStorage.getItem('userForm'));
      alert("Korisnik uspešno kreiran !")
    }else{
      alert("Neophodno je uneti ispravne podatke !")
    }

  }

  delete(data){
    console.log(data)
    var allData = JSON.parse(localStorage.getItem('userForm'));
    allData = allData.filter(item => item.id !== data.id);
    console.log(allData)
    localStorage.removeItem('userForm');
    localStorage.setItem('userForm',JSON.stringify(allData))
    this.dataSource.data = JSON.parse(localStorage.getItem('userForm'));

  }
}
