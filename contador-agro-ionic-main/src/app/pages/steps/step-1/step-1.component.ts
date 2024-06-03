import { Component, OnInit, inject } from '@angular/core';
import {
  IonSearchbar,
  IonContent,
  IonList,
  IonItem,
} from '@ionic/angular/standalone';
import { PropriedadeViewComponent } from '../../../common/propriedade-view/propriedade-view.component';
import { PropriedadeModel } from 'src/types/propriedades';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-step-1',
  templateUrl: './step-1.component.html',
  standalone: true,
  imports: [
    IonItem,
    IonList,
    IonContent,
    IonSearchbar,
    CommonModule,
    PropriedadeViewComponent,
    RouterModule,
  ],
})
export class Step1Component implements OnInit {
  propriedades: PropriedadeModel[] = [];
  results: PropriedadeModel[] = [];

  constructor(private router: Router) {
    this.router = inject(Router);
  }

  ngOnInit() {
    //@ts-ignore mais uma vez, informacoes demais para mock
    this.propriedades = Array.from({ length: 20 }).map(() => {
      return {
        tipoPessoa: 'pf',
        cnpjCpf: '08.066.500/0001-38',
        nome: 'FAZENDA SÃO JOÃO',
        ie: '322102411116',
        usuarioId: '0',
        creditoOutorgado: true,
        //@ts-ignore Não preciso de tudo isso para mock
        endereco: {
          cidade: 'Guaíra',
          uf: 'SP',
        },
      };
    });
    this.propriedades = [
      //@ts-ignore Não preciso de tudo isso para mock
      ...this.propriedades,
      {
        tipoPessoa: 'pf',
        cnpjCpf: '08.066.500/0001-38',
        nome: 'FAZENDA DENIS',
        ie: '99928392839',
        usuarioId: '4',
        creditoOutorgado: true,
        //@ts-ignore Não preciso de tudo isso para mock
        endereco: {
          cidade: 'Ananindeua',
          uf: 'PA',
        },
      },
    ];
    this.results = [...this.propriedades];
  }

  handleInput(ev: Event) {
    const { value } = ev.target as HTMLInputElement;
    if (!value || value.length < 3) {
      this.results = [...this.propriedades];
    }
    this.results = this.propriedades.filter((p) => {
      const { nome, endereco, cnpjCpf, ie } = p;
      return [nome, endereco, cnpjCpf, ie]
        .join(' ')
        .toLocaleLowerCase()
        .includes(value.toLocaleLowerCase());
    });
  }
  selectPropriedadeHandler(propriedade: PropriedadeModel) {
    console.log({ nome: propriedade.nome, id: propriedade.id });
    this.router.navigate(['2']);
  }
}
