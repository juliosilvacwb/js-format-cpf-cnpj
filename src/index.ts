import { formatCNPJ } from "js-format-cnpj";
import { formatCPF } from "js-format-cpf";

export function formatCPForCNPJ(cpfOrCnpj?: string) {
    if (!cpfOrCnpj) return cpfOrCnpj;
    let digits = cpfOrCnpj.replace(/\D/g, "");
    if (digits.length === 11) return formatCPF(cpfOrCnpj);
    if (digits.length === 14) return formatCNPJ(cpfOrCnpj);

    return cpfOrCnpj;
} 