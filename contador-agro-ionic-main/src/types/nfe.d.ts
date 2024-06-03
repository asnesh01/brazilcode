import { NotaFiscalFreteModel } from './frete';
import { EnderecoModel, PropriedadeModel } from './propriedades';

// Enumerações e outros modelos referenciados
export enum TipoOperacaoEnum {
  Entrada,
  Saida,
}

// Defina as opções possíveis para o export export enum

export enum IdentificacaoDestinoEnum {
  Interna = 1,
  Interestadual = 2,
  Exterior = 3,
}
// Defina as opções possíveis para o export export enum

export enum FormatoImpDanfeEnum {
  SemGeracao,
  Retrato,
  Paisagem,
  Simplificado,
  NFC,
  NFCMensagemEletronica,
}
// Defina as opções possíveis para o export enum

export enum FormaEmissaoNfeEnum {
  // 1 - Normal 2 - Contingência FS 3 - Regime Especial NFF 4 - Contingência DPEC 5 - Contingência FSDA 6 - Contingência SVC-AN 7 - Contingência SVC-RS 9 - Contingência Off-line NFC-e
  Zero,
  Normal,
  ContingenciaFS,
  RegimeEspecialNFF,
  ContingenciaDPEC,
  ContingenciaFSDA,
  ContingenciaSVCAN,
  ContingenciaSVCRS,
  ContingenciaOffLineNFCe,
  OffLineNFCe,
}
// Defina as opções possíveis para o export enum

export enum AmbienteEmissaoNfeEnum {
  Producao = 1,
  Homologacao = 2,
}
// Defina as opções possíveis para o export enum

export enum FinalidadeEmissaoEnum {
  // 1 - NFe normal; 2 - NFe complementar; 3 - NFe de ajuste; 4 - Devolução de mercadoria.
  Normal = 1,
  Complementar = 2,
  Ajuste = 3,
  Devolucao = 4,
}
// Defina as opções possíveis para o export enum

export enum IndConsumidorFinalEnum {
  Nao,
  Sim,
}

// Defina as opções possíveis para o export enum

export enum IndPresencaCompradorEnum {
  // 0 - Não se aplica 1 - Operação presencial 2 - Operação não presencial, pela Internet 3 - Operação não presencial, Teleatendimento 4 - NFC-e em operação com entrega em domicílio 5 - Operação presencial, fora do estabelecimento 9 - Operação não presencial, outros
  NaoSeAplica,
  Presencial,
  NaoPresencialInternet,
  NaoPresencialTeleatendimento,
  NFCeEntregaEmDomicilio,
  PresencialForaEstabelecimento,
  NaoPresencialOutros,
}
// Defina as opções possíveis para o export enum

export interface NotaFiscalCobrancaParcelaModel {
  id?: string; // Optional, UUID
  notaFiscalCobrancaId?: string; // Optional, Nullable UUID
  numero: string; // Required, pattern of three digits
  dataVencimento: string; // Required, date-time
  valor: number; // Required, minimum 0, double
}

export interface NotaFiscalCobrancaModel {
  id?: string; // UUID
  notaFiscalId?: string; // Nullable UUID
  numero?: string; // Optional, max 60
  valorTotal?: number; // Optional, double
  valorDesconto?: number; // Optional, double
  valorLiquido?: number; // Optional, double
  parcelas?: NotaFiscalCobrancaParcelaModel[]; // Optional, array of references
}

export enum MeioPagamentoEnum {
  DINHEIRO = 1, // 01 - Dinheiro
  CHEQUE = 2, // 02 - Cheque
  CARTAO_CREDITO = 3, // 03 - Cartão de Crédito
  CARTAO_DEBITO = 4, // 04 - Cartão de Débito
  CREDITO_LOJA = 5, // 05 - Crédito Loja
  VALE_ALIMENTACAO = 10, // 10 - Vale Alimentação
  VALE_REFEICAO = 11, // 11 - Vale Refeição
  VALE_PRESENTE = 12, // 12 - Vale Presente
  VALE_COMBUSTIVEL = 13, // 13 - Vale Combustível
  BOLETO_BANCARIO = 15, // 15 - Boleto Bancário
  DEPOSITO_BANCARIO = 16, // 16 - Depósito Bancário
  PIX = 17, // 17 - Pagamento Instantâneo (PIX)
  TRANSFERENCIA_BANCARIA = 18, // 18 - Transferência bancária, Carteira Digital
  FIDELIDADE_CASHBACK = 19, // 19 - Programa de fidelidade, Cashback, Crédito Virtual
  SEM_PAGAMENTO = 90, // 90 - Sem pagamento
  OUTROS = 99, // 99 - Outros
}

interface NotaFiscalPagamentoModel {
  id?: string; // Optional, UUID
  notaFiscalId?: string; // Optional, Nullable UUID
  aVista?: boolean; // Optional, indicates if payment is upfront
  meio: MeioPagamentoEnum; // Required, reference to MeioPagamentoEnum
  descricaoMeio?: string; // Optional, max 60
  valor: number; // Required, minimum 0, double
}

export enum IndIeDestEnum {
  ContribuinteICMS = 1,
  ContribuinteIsento = 2,
  ContribuinteNaoContribuinte = 9,
}
// Enum options for IndIeDestEnum

export interface DestinatarioModel {
  id?: string; // Optional, UUID
  nome: string; // Required, max 60
  tipoPessoa: string; // Required
  cnpjCpf: string; // Required, max 20
  indIeDest: IndIeDestEnum; // Required, reference to enum
  ie?: string; // Optional, max 14
  suframa?: string; // Optional, max 9
  inscMun?: string; // Optional, max 15
  dataCad?: string; // Optional, date-time
  usuarioId: string; // Required, UUID
  creditoOutorgado?: boolean; // Optional
  endereco: EnderecoModel; // Required, reference to EnderecoModel
  telefoneNumero?: string; // Optional, max 11
  telefoneTipo?: string; // Optional, max 8
  emailEndereco?: string; // Optional, max 254, email format
  emailContato?: string; // Optional, max 100
  emailSetor?: string; // Optional, max 100
}

export interface NotaFiscalStatusEnum extends Number {}

interface NotaFiscalStatusModel {
  id?: string; // Optional, UUID
  notaFiscalId?: string; // Optional, UUID
  plugNotasId: string; // Required, max 24
  plugNotasMessage?: string; // Optional
  plugNotasProtocol?: string; // Optional
  emissao?: string; // Optional, date format
  createdAt: string; // Required, date-time format
  plugNotasStatus: NotaFiscalStatusEnum; // Required, reference to enum
  destinada?: boolean; // Optional
  emitente: string; // Required, max 14
  destinatario?: string; // Optional
  valor?: number; // Optional, double format
  dataAutorizacao?: string; // Optional, date format
  numero?: string; // Optional, max 9
  serie?: string; // Optional, max 3
  chave?: string; // Optional, max 44
  protocolo?: string; // Optional
  mensagem?: string; // Optional
  xml?: string; // Optional, URI format
  pdf?: string; // Optional, URI format
  cStat?: number; // Optional, int32 format
  documento?: string; // Optional
  codigo?: string; // Optional
  xmlCancelamento?: string; // Optional, URI format
  dataCancelamento?: string; // Optional, date format
  protocoloCancelamento?: string; // Optional
}

// Interface principal
export interface NotaFiscalIdeResponseModel {
  id?: string; // Campo opcional
  emitenteId: string; // Obrigatório
  destinatarioId: string; // Obrigatório
  naturezaOperacaoId: string; // Obrigatório
  descNaturezaOperacao: string; // Obrigatório
  serie?: string; // Opcional
  numero?: string; // Opcional
  dataEmissao?: string; // Opcional, tipo date-time
  dataEntradaSaida?: string; // Opcional, tipo date-time
  tipoDocumento: TipoOperacaoEnum; // Obrigatório
  idDestino?: IdentificacaoDestinoEnum; // Opcional
  codMunFatoGerador?: string; // Opcional
  formatoImpDanfe?: FormatoImpDanfeEnum; // Opcional
  tipoEmissao: FormaEmissaoNfeEnum; // Obrigatório
  ambiente: AmbienteEmissaoNfeEnum; // Obrigatório
  finalidadeEmissao: FinalidadeEmissaoEnum; // Obrigatório
  indConsFinal: IndConsumidorFinalEnum; // Obrigatório
  indPresenca: IndPresencaCompradorEnum; // Obrigatório
  dataHoraContingencia?: string; // Opcional, tipo date-time
  justificativaContingencia?: string; // Opcional
  informacoesComplementares?: string; // Opcional
  enviarEmail?: boolean; // Opcional
  chaveAcesso?: string; // Opcional
  justificativaCancelamento?: string; // Opcional
  frete?: NotaFiscalFreteModel; // Opcional
  cobranca?: NotaFiscalCobrancaModel; // Opcional
  pagamentos?: NotaFiscalPagamentoModel[]; // Opcional, array
  itens?: NotaFiscalItemModel[]; // Opcional, array
  emitente?: PropriedadeModel; // Opcional
  destinatario?: DestinatarioModel; // Opcional
  naturezaOperacao?: NaturezaOperacaoModel; // Opcional
  statuses?: NotaFiscalStatusModel[]; // Opcional, array
  status?: NotaFiscalStatusEnum; // Opcional
}

export interface NaturezaOperacaoModel {
  // Defina a estrutura do modelo
}

export interface NotaFiscalItemModel {
  // Defina a estrutura do modelo
}
