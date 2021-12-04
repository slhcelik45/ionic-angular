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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  validationMessages = {
    names: [{ type: 'required', message: 'Please Enter your Full Names' }],
    phone: [{ type: 'required', message: 'Please Enter your Phone No.' }],
    email: [
      { type: 'required', message: 'Enter your Email Adress' },
      {
        type: 'pattern',
        meesage: 'Please the Email Entered is Incorrect. Try again..',
      },
    ],
    password: [
      { type: 'required', message: 'password is required here' },
      { type: 'minlength', message: 'Passwrd must be at least 6 character' },
    ],
  };

  ValidationFormUSer: FormGroup;
  loading: any;
  constructor(
    private router: Router,
    private navCtr: NavController,
    private formbuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.ValidationFormUSer = this.formbuilder.group({
      names: new FormControl('', Validators.compose([Validators.required])),

      phone: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),

      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
    });
  }
  registerUser(value) {
    this.showalert();
    try {
      /* this.authService.userRegistration(value).then(
        (response) => {
          console.log(response);
          if (response.user) {
            response.user.updateProfile({
              displayName: value.names,
              email: value.email,
              phoneNumber: value.phone,
            });
            this.loading.dismiss();
            this.router.navigate(['login']);
          }
        },
        (error) => {
          this.loading.dismiss();
          this.errorLoading(error.message);
        }
      ); */
    } catch (erro) {
      console.log(erro);
    }
  }

  async errorLoading(message: any) {
    const loading = await this.alertCtrl.create({
      header: 'Error Registering',
      message: message,
      buttons: [
        {
          text: 'ok',
          handler: () => {
            this.navCtr.navigateBack(['register']);
          },
        },
      ],
    });
    await loading.present();
  }

  async showalert() {
    var load = await this.loadingCtrl.create({
      message: 'please wait....',
    });
    load.present();
  }
}
