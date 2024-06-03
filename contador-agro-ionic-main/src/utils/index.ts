const brlFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const formatBRL = (value: number | undefined) => {
  if (!value) return brlFormatter.format(0);
  return brlFormatter.format(value);
};
