import { isValidDateBR, isOver18, getAge } from '../src/date';

describe('Validação de datas (BR)', () => {
    it('valida datas existentes', () => {
        expect(isValidDateBR('31/12/2025')).toBe(true);
        expect(isValidDateBR('31/02/2025')).toBe(false);
    });

    it('valida maioridade', () => {
        expect(isOver18('01/01/2000')).toBe(true);
        expect(isOver18('01/01/2010')).toBe(false);
    });

    it('calcula idade corretamente', () => {
        const age = getAge('01/01/2000');
        expect(age).toBeGreaterThanOrEqual(24);
    });
});
