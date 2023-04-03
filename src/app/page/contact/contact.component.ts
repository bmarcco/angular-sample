import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      title: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      text: ["", Validators.required]
    })
  }

  save() {
    if(this.contactForm.valid)
    {
      const data = this.contactForm.getRawValue();
      console.log("Form data", data);
    }else{
      console.log("Niste pounili obavezna polja!")
    }
    

  }

}
