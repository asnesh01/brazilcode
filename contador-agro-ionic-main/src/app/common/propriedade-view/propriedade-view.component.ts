import { Component, Input, OnInit } from '@angular/core';
import { PropriedadeModel } from 'src/types/propriedades';
import { IonItem, IonRippleEffect } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-propriedade-view',
  templateUrl: './propriedade-view.component.html',
  standalone: true,
  imports: [IonRippleEffect, CommonModule, IonItem],
})
export class PropriedadeViewComponent implements OnInit {
  @Input() propriedade: PropriedadeModel = {
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
  @Input() onSelectPropriedade: (propriedade: PropriedadeModel) => void =
    () => {};
  constructor() {}

  ngOnInit() {
    return;
  }
}
