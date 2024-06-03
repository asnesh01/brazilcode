import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonTitle,
  IonButtons,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonToolbar,
    IonButtons,
    IonTitle,
    IonHeader,
    CommonModule,
    IonApp,
    IonRouterOutlet,
  ],
})
export class AppComponent {
  constructor() {}
}
