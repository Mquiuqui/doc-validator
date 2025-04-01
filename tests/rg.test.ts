import { isValidRG } from '../src/rg';

describe('Validação de RG', () => {
    it('deve validar RG válido com X', () => {
        expect(isValidRG('12.345.678-X')).toBe(true);
    });

    it('deve invalidar RG inválido', () => {
        expect(isValidRG('00.000.000-0')).toBe(false);
    });
});