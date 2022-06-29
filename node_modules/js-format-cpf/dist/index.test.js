"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('Tests for formatCPF', () => {
    test('should format CPF when receive only numbers', () => {
        expect((0, index_1.formatCPF)('49075215029')).toBe('490.752.150-29');
    });
    test('should format CPF when receive numbers with mask of CPF', () => {
        expect((0, index_1.formatCPF)('490.752.150-29')).toBe('490.752.150-29');
    });
    test('should format CPF when receive numbers with wrong mask of CPF', () => {
        expect((0, index_1.formatCPF)('490+752-150.29')).toBe('490.752.150-29');
    });
    test('should return received param when the param is not CPF', () => {
        expect((0, index_1.formatCPF)('10')).toBe('10');
    });
    test('should return undefined when param is undefined', () => {
        expect((0, index_1.formatCPF)(undefined)).toBe(undefined);
    });
});
