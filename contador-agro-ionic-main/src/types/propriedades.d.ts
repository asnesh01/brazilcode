export enum CrtEnum {
  // Simples Nacional = 1, Simples Nacional - Excesso Sublimite de Receita Bruta = 2, Regime Normal = 3
  SimplesNacional = 1,
  SimplesNacionalExcessoSublimiteReceitaBruta = 2,
  RegimeNormal = 3,
}
// Enum options for CrtEnum

export enum FunRuralEnum {
  Folha = 1,
  Producao = 2,
}
// Enum options for FunRuralEnum

export enum TipoLogradouroEnum {
  Alameda,
  Avenida,
  Chacara,
  Colonia,
  Condominio,
  Estancia,
  Estrada,
  Fazenda,
  Praca,
  Prologamento,
  Rodo,
  Rua,
  Sitio,
  Travessa,
  Vicinal,
  Eqpn,
}
// Enum options for TipoLogradouroEnum

export interface EnderecoModel {
  id?: string; // Optional, UUID
  origemId: string; // Required, UUID
  codigoIbge: string; // Required, length 7, digits only
  tipo?: string; // Optional, UUID
  logradouro: string; // Required, max 100
  tipoLogradouro: TipoLogradouroEnum; // Required, reference to TipoLogradouroEnum
  numero: string; // Required, max 20
  complemento?: string; // Optional, max 100
  bairro: string; // Required, max 100
  cep: string; // Required, max 9
  pais?: string; // Optional, max 50
  cidade?: string; // Optional, max 60
  uf?: string; // Optional, max 2
}

interface PropriedadeCertificadoModel {
  id?: string; // Optional, UUID
  propriedadeId: string; // Required, UUID
  plugNotasId?: string; // Optional
  nome?: string; // Optional
  hash?: string; // Optional
  vencimento: string; // Required, date-time
  cnpj?: string; // Optional
  email?: string; // Optional
  cnpjEmitente?: string; // Optional, read-only
}

interface PropriedadeNfeConfigModel {
  propriedadeId: string; // Required, UUID
  producao: boolean; // Required, indicates if the production environment is used
  numero?: string; // Optional, initial number for issuing NFe
  serie?: string; // Optional, NFe series
}

export interface PropriedadeModel {
  id?: string; // Optional, UUID
  tipoPessoa: string; // Required, length 1
  cnpjCpf: string; // Required, max 14
  nome: string; // Required, max 60
  nomeFantasia?: string; // Optional, max 60
  ie: string; // Required, max 14
  inscMun?: string; // Optional, max 20
  cnae?: string; // Optional, max 7
  crt?: CrtEnum; // Optional, reference to CrtEnum
  usuarioId: string; // Required, UUID
  logoImgBase64?: string; // Optional
  dataCad?: string; // Optional, date-time
  isentoIcms?: boolean; // Optional
  nirf?: string; // Optional, max 10
  funrural?: FunRuralEnum; // Optional, reference to FunRuralEnum
  creditoOutorgado: boolean; // Required
  endereco?: EnderecoModel; // Optional, reference to EnderecoModel
  telefoneNumero?: string; // Optional, max 11
  telefoneTipo?: string; // Optional, max 8
  emailEndereco?: string; // Optional, max 254, email format
  emailContato?: string; // Optional, max 100
  emailSetor?: string; // Optional, max 100
  certificado?: PropriedadeCertificadoModel; // Optional
  nfeConfig?: PropriedadeNfeConfigModel; // Optional
}
