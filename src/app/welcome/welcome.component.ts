import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private nav: NavController) {}

  ngOnInit() {}
  gotoLoginpage() {
    this.nav.navigateForward(['login']);
  }

  registerUser() {
    this.nav.navigateForward(['register']);
  }
}
