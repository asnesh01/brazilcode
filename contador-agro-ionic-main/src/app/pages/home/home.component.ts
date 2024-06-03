import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonButton,
  IonRippleEffect,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  createOutline,
  documentOutline,
  documentTextOutline,
  documentsOutline,
} from 'ionicons/icons';
import { HeaderComponent } from 'src/app/common/header/header.component';
import { ButtonConfig } from 'src/types';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    IonIcon,
    IonRippleEffect,
    IonButton,
    IonContent,
    CommonModule,
    HeaderComponent,
    RouterLink,
  ],
})
export class HomeComponent {
  public buttons: ButtonConfig[] = [
    { icon: 'document-outline', label: 'NOVA NFe', href: '/steps' },
    {
      icon: 'document-text-outline',
      label: "NFE's EMITIDAS",
      href: '/notas-emitidas',
    },
    { icon: 'documents-outline', label: 'DOCUMENTOS', href: '/documentos' },
    { icon: 'create-outline', label: 'CADASTROS' },
  ];
  constructor() {
    addIcons({
      documentOutline,
      documentTextOutline,
      documentsOutline,
      createOutline,
    });
  }
}
