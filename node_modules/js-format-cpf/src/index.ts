export function formatCPF(CPF?: string) {
    if (!CPF) return CPF;
    let digits = CPF.replace(/\D/g, "");
    if (digits.length !== 11) return CPF;

    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`;
}