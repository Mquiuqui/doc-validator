import { isValidCNH } from '../src/cnh';

describe('Validação de CNH', () => {
    it('deve validar CNH válida', () => {
        expect(isValidCNH('02650306461')).toBe(true);
    });

    it('deve invalidar CNH inválida', () => {
        expect(isValidCNH('11111111111')).toBe(false);
    });
});
