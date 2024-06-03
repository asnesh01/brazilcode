import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonButton,
  IonIcon,
  IonItem,
  IonInput,
  IonList,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { eyeOffOutline, eyeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [IonList, IonInput, IonItem, IonIcon, IonButton, CommonModule],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
})
export class PasswordInput {
  public passwordHidden = true;
  constructor() {
    addIcons({ eyeOutline, eyeOffOutline });
  }

  public togglePassword(ev: MouseEvent) {
    this.passwordHidden = !this.passwordHidden;
    const button = ev.target as HTMLElement;
    const input = button.previousElementSibling as HTMLInputElement | null;
    if (!input) {
      return;
    }
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}
