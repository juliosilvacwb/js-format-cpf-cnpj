"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCPForCNPJ = void 0;
const js_format_cnpj_1 = require("js-format-cnpj");
const js_format_cpf_1 = require("js-format-cpf");
function formatCPForCNPJ(cpfOrCnpj) {
    if (!cpfOrCnpj)
        return cpfOrCnpj;
    let digits = cpfOrCnpj.replace(/\D/g, "");
    if (digits.length === 11)
        return (0, js_format_cpf_1.formatCPF)(cpfOrCnpj);
    if (digits.length === 14)
        return (0, js_format_cnpj_1.formatCNPJ)(cpfOrCnpj);
    return cpfOrCnpj;
}
exports.formatCPForCNPJ = formatCPForCNPJ;
