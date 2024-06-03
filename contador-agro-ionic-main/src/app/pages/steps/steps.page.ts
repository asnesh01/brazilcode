import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../common/header/header.component';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.page.html',
  standalone: true,
  imports: [
    IonRouterOutlet,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
    ReactiveFormsModule,
  ],
})
export class StepsPage implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      step1: this.formBuilder.group({
        firstName: '',
        lastName: '',
        birthDate: '',
      }),
      step2: this.formBuilder.group({
        address: '',
        country: '',
      }),
    });
  }

  getStep1Form(): FormGroup {
    return this.form.get('step1') as FormGroup;
  }

  getStep2Form(): FormGroup {
    return this.form.get('step2') as FormGroup;
  }
}
