import { isValidCNH } from '../src/cnh';

describe('Validação de CNH', () => {
    it('deve validar CNH válida', () => {
        expect(isValidCNH('12345678909')).toBe(true);
    });

    it('deve invalidar CNH inválida', () => {
        expect(isValidCNH('11111111111')).toBe(false);
    });
});
