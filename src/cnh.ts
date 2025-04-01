export function isValidCNH(cnh: string): boolean {
    cnh = cnh.replace(/\D/g, '');
    if (cnh.length !== 11 || /^(\d)\1+$/.test(cnh)) return false;

    let dsc = 0;
    let v = 0;
    for (let i = 0, j = 9; i < 9; ++i, --j) {
        v += +cnh.charAt(i) * j;
    }
    let d1 = v % 11;
    d1 = d1 >= 10 ? 0 : d1;
    dsc = d1 >= 10 ? 2 : 0;
    v = 0;
    for (let i = 0, j = 1; i < 9; ++i, ++j) {
        v += +cnh.charAt(i) * j;
    }
    let d2 = (v % 11) - dsc;
    d2 = d2 < 0 ? d2 + 11 : d2;
    d2 = d2 >= 10 ? 0 : d2;

    return `${d1}${d2}` === cnh.slice(-2);
}

export function formatCNH(cnh: string): string {
    const digits = cnh.replace(/\D/g, '');
    if (digits.length !== 11) return cnh;
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9)}`;
}
