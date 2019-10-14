import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.loginForm = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'password': [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  getErrorEmail() {
    return this.loginForm.get('email').hasError('required') ? 'Email is required' :
      this.loginForm.get('email').hasError('pattern') ? 'Please enter a valid email' : '';
  }

  getErrorPassword() {
    return this.loginForm.get('password').hasError('required') ? 'Password is required (at least eight characters)' :
      this.loginForm.get('password').hasError('requirements') ? 'Password needs to be at least eight characters' : '';
  }

  onSubmit(post) {
    this.post = post;
  }

}
