import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public form: FormGroup;

  public messageText:string="";

  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      name: this.formBuilder.control("", [Validators.required]),
      phone: this.formBuilder.control("", [Validators.required]),
      email: this.formBuilder.control("", [Validators.required, Validators.email]),
      message: this.formBuilder.control("", [Validators.required])
    });

   }

  ngOnInit(): void {
  }

  save(){
    if(this.form.valid){
      this.messageText="Message sent";
      this.form.reset();
    }
    else{
      alert("Form is not valid!");
    }
  }

}
