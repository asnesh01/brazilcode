import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonContent,
  IonInput,
  IonItem,
  IonIcon,
  IonButton,
  IonList,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline } from 'ionicons/icons';
import { LoginHeaderComponent } from 'src/app/common/login-header/login-header.component';
import { PasswordInput } from 'src/app/common/password-input/password-input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonGrid,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonList,
    IonButton,
    IonIcon,
    IonItem,
    IonInput,
    IonContent,
    CommonModule,
    PasswordInput,
    LoginHeaderComponent,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor() {
    addIcons({ personOutline });
  }
}
