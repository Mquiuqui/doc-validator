export function isValidCNPJ(cnpj: string): boolean {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;
  
    const calcCheckDigit = (cnpj: string, pos: number) => {
      const weight = pos === 12 ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
      const sum = cnpj
        .slice(0, pos)
        .split('')
        .reduce((acc, digit, i) => acc + parseInt(digit) * weight[i], 0);
      const rest = sum % 11;
      return rest < 2 ? 0 : 11 - rest;
    };
  
    const digit1 = calcCheckDigit(cnpj, 12);
    const digit2 = calcCheckDigit(cnpj, 13);
    return cnpj.endsWith(`${digit1}${digit2}`);
  }
  
  export function formatCNPJ(cnpj: string): string {
    const digits = cnpj.replace(/[^\d]+/g, '');
    if (digits.length !== 14) return cnpj;
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12, 14)}`;
  }