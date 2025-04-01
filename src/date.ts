export function isValidDateBR(date: string): boolean {
    const [day, month, year] = date.split('/').map(Number);
    const dt = new Date(year, month - 1, day);
    return (
        dt.getFullYear() === year &&
        dt.getMonth() === month - 1 &&
        dt.getDate() === day
    );
}

export function isOver18(date: string): boolean {
    const [day, month, year] = date.split('/').map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    return age > 18 || (age === 18 && m >= 0 && today.getDate() >= birthDate.getDate());
}

export function getAge(date: string): number {
    const [day, month, year] = date.split('/').map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}