import { isValidCNPJ } from '../src/cnpj';

describe('Validação de CNPJ', () => {
  it('deve validar CNPJ válido', () => {
    expect(isValidCNPJ('04.252.011/0001-10')).toBe(true);
  });

  it('deve invalidar CNPJ inválido', () => {
    expect(isValidCNPJ('11.111.111/1111-11')).toBe(false);
  });
});
