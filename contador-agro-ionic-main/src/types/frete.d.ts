export enum ModalidadeFreteEnum {
  Emitente,
  DestinatarioRemetente,
  Terceiros,
  ProprioRemetente,
  ProprioDestinatario,
  SemFrete = 9,
}
// Enum options for ModalidadeFreteEnum

export interface TransportadorModel {
  id?: string; // UUID
  cnpjCpf: string; // Required, max 14, min 11, pattern for digits only
  nome: string; // Required, max 60, min 2
  ie?: string; // Optional, max 14, min 2
  endereco?: string; // Optional, max 60, min 1
  municipio?: string; // Optional, max 60, min 1
  uf?: string; // Optional, max 2, min 2
  usuarioId?: string; // Optional, UUID
}

interface NotaFiscalFreteVeiculoModel {
  id?: string; // UUID
  notaFiscalFreteId?: string; // Nullable UUID
  placa?: string; // Optional, regex pattern for vehicle plate
  uf?: number; // Reference to enum UfEnum
}

interface NotaFiscalFreteVolumeModel {
  id?: string; // UUID
  notaFiscalFreteId?: string; // Nullable UUID
  quantidade?: number; // Optional, int32
  especie?: string; // Optional, max 60
  pesoBruto: number; // Required, minimum 0.001, double
  pesoLiquido: number; // Required, minimum 0.001, double
}

export interface NotaFiscalFreteModel {
  id: string; // UUID
  notaFiscalId?: string; // Nullable UUID
  modalidadeFrete: ModalidadeFreteEnum; // Reference to Enum
  transportadorId?: string; // Nullable UUID
  transportador?: TransportadorModel; // Reference to TransportadorModel
  veiculo?: NotaFiscalFreteVeiculoModel; // Reference to NotaFiscalFreteVeiculoModel
  volume?: NotaFiscalFreteVolumeModel; // Reference to NotaFiscalFreteVolumeModel
}
