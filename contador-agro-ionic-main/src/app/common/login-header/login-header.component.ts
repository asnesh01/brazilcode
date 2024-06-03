import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { CaLogoComponent } from '../ca-logo/ca-logo.component';
import { CaLogo2Component } from '../ca-logo-2/ca-logo-2.component';

@Component({
  selector: 'app-login-header',
  standalone: true,
  templateUrl: './login-header.component.html',
  imports: [
    IonTitle,
    IonToolbar,
    IonHeader,
    CommonModule,
    CaLogoComponent,
    CaLogo2Component,
  ],
})
export class LoginHeaderComponent {}
