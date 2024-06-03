import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { CaLogo2Component } from '../ca-logo-2/ca-logo-2.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonHeader,
    CommonModule,
    CaLogo2Component,
    IonToolbar,
  ],
})
export class HeaderComponent {
  constructor() {}
}
