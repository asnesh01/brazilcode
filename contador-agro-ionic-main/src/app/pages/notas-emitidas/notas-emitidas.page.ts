import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../common/header/header.component';
import { addIcons } from 'ionicons';
import { ellipsisVertical } from 'ionicons/icons';
import {
  ActionSheetController,
  type ActionSheetOptions,
  type ActionSheetButton,
} from '@ionic/angular';
import { NotaFiscalIdeResponseModel } from 'src/types/nfe';
import { formatBRL } from 'src/utils';

@Component({
  selector: 'app-notas-emitidas',
  templateUrl: './notas-emitidas.page.html',
  standalone: true,
  imports: [
    IonIcon,
    IonButton,
    IonItem,
    IonList,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
  ],
})
export class NotasEmitidasPage {
  public actionSheetButtons: ActionSheetButton<{
    action: (notaId: number) => void | Promise<void>;
  }>[] = [
    {
      text: 'Compartilhar',
      data: {
        action: () => {},
      },
    },
    {
      text: 'Cancelar nota',
      role: 'cancel',
      data: {
        action: () => {},
      },
    },
    {
      text: 'Visualizar PDF',
      data: {
        action: () => {},
      },
    },
  ];

  public actionSheetOptions: ActionSheetOptions = {
    header: 'Ações da Nota Fiscal',
    cssClass: 'primary-action-sheet',
    buttons: this.actionSheetButtons,
  };

  public NFes: NotaFiscalIdeResponseModel[] = [
    {
      id: '',
      numero: '307',
      emitente: {
        nome: 'AMJ AGRONEGOCIOS LTDA',
        tipoPessoa: '',
        cnpjCpf: '',
        ie: '',
        usuarioId: '',
        creditoOutorgado: true,
      },
      cobranca: {
        valorLiquido: 555,
      },
      emitenteId: '',
      destinatarioId: '',
      naturezaOperacaoId: '',
      descNaturezaOperacao: '',
      tipoDocumento: 1,
      tipoEmissao: 1,
      ambiente: 1,
      finalidadeEmissao: 1,
      indConsFinal: 1,
      indPresenca: 1,
      dataEmissao: '2023-07-17',
    },
    {
      id: '',
      numero: '307',
      emitente: {
        nome: 'AMJ AGRONEGOCIOS LTDA',
        tipoPessoa: '',
        cnpjCpf: '',
        ie: '',
        usuarioId: '',
        creditoOutorgado: true,
      },
      cobranca: {
        valorLiquido: 555,
      },
      emitenteId: '',
      destinatarioId: '',
      naturezaOperacaoId: '',
      descNaturezaOperacao: '',
      tipoDocumento: 1,
      tipoEmissao: 1,
      ambiente: 1,
      finalidadeEmissao: 1,
      indConsFinal: 1,
      indPresenca: 1,
      dataEmissao: '2023-07-17',
    },
    {
      id: '',
      numero: '307',
      emitente: {
        nome: 'AMJ AGRONEGOCIOS LTDA',
        tipoPessoa: '',
        cnpjCpf: '',
        ie: '',
        usuarioId: '',
        creditoOutorgado: true,
      },
      cobranca: {
        valorLiquido: 555,
      },
      emitenteId: '',
      destinatarioId: '',
      naturezaOperacaoId: '',
      descNaturezaOperacao: '',
      tipoDocumento: 1,
      tipoEmissao: 1,
      ambiente: 1,
      finalidadeEmissao: 1,
      indConsFinal: 1,
      indPresenca: 1,
      dataEmissao: '2023-07-17',
    },
    {
      id: '',
      numero: '307',
      emitente: {
        nome: 'AMJ AGRONEGOCIOS LTDA',
        tipoPessoa: '',
        cnpjCpf: '',
        ie: '',
        usuarioId: '',
        creditoOutorgado: true,
      },
      cobranca: {
        valorLiquido: 555,
      },
      emitenteId: '',
      destinatarioId: '',
      naturezaOperacaoId: '',
      descNaturezaOperacao: '',
      tipoDocumento: 1,
      tipoEmissao: 1,
      ambiente: 1,
      finalidadeEmissao: 1,
      indConsFinal: 1,
      indPresenca: 1,
      dataEmissao: '2023-07-17',
    },
    {
      id: '',
      numero: '307',
      emitente: {
        nome: 'AMJ AGRONEGOCIOS LTDA',
        tipoPessoa: '',
        cnpjCpf: '',
        ie: '',
        usuarioId: '',
        creditoOutorgado: true,
      },
      cobranca: {
        valorLiquido: 555,
      },
      emitenteId: '',
      destinatarioId: '',
      naturezaOperacaoId: '',
      descNaturezaOperacao: '',
      tipoDocumento: 1,
      tipoEmissao: 1,
      ambiente: 1,
      finalidadeEmissao: 1,
      indConsFinal: 1,
      indPresenca: 1,
      dataEmissao: '2023-07-17',
    },
    {
      id: '',
      numero: '307',
      emitente: {
        nome: 'AMJ AGRONEGOCIOS LTDA',
        tipoPessoa: '',
        cnpjCpf: '',
        ie: '',
        usuarioId: '',
        creditoOutorgado: true,
      },
      cobranca: {
        valorLiquido: 555,
      },
      emitenteId: '',
      destinatarioId: '',
      naturezaOperacaoId: '',
      descNaturezaOperacao: '',
      tipoDocumento: 1,
      tipoEmissao: 1,
      ambiente: 1,
      finalidadeEmissao: 1,
      indConsFinal: 1,
      indPresenca: 1,
      dataEmissao: '2023-07-17',
    },
  ];
  constructor(private actionSheetCtrl: ActionSheetController) {
    addIcons({ ellipsisVertical });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create(
      this.actionSheetOptions
    );

    await actionSheet.present();
  }

  formataMoeda(valor: number | undefined) {
    return formatBRL(valor);
  }
}
