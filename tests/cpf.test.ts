import { isValidCPF } from '../src/cpf';

describe('Validação de CPF', () => {
    it('deve validar CPF válido', () => {
        expect(isValidCPF('529.982.247-25')).toBe(true);
    });

    it('deve invalidar CPF inválido', () => {
        expect(isValidCPF('123.456.789-00')).toBe(false);
    });
});