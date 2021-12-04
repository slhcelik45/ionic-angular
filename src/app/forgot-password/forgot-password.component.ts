import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  NavController,
} from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  validationMessages = {
    email: [
      { type: 'required', message: 'Enter your Email Adress' },
      {
        type: 'pattern',
        meesage: 'Please the Email Entered is Incorrect. Try again..',
      },
    ],
  };

  ValidationFormPassport: FormGroup;
  loading: any;
  constructor(
    private router: Router,
    private nav: NavController,
    private formbuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.ValidationFormPassport = this.formbuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
    });
  }
  forgotPassportForm() {
    console.log('Forgot Passport', this.ValidationFormPassport);
  }
}
