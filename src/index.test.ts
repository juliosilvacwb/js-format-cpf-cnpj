import { formatCPForCNPJ } from './index';

describe('Tests for formatCPForCNPJ', () => {

    test('should format CPF when receive only numbers', () => {
        expect(formatCPForCNPJ('49075215029')).toBe('490.752.150-29');
    });
    
    test('should format CPF when receive numbers with mask of CPF', () => {
        expect(formatCPForCNPJ('490.752.150-29')).toBe('490.752.150-29');
    });
    
    test('should format CPF when receive numbers with wrong mask of CPF', () => {
        expect(formatCPForCNPJ('490+752-150.29')).toBe('490.752.150-29');
    });

    test('should return received param when the param is not CPF', () => {
        expect(formatCPForCNPJ('10')).toBe('10');
    });

    test('should return undefined when param is undefined', () => {
        expect(formatCPForCNPJ('')).toBe('');
    });

    test('should format CNPJ when receive only numbers', () => {
        expect(formatCPForCNPJ('88601412000128')).toBe('88.601.412/0001-28');
    });
    
    test('should format CNPJ when receive numbers with mask of CNPJ', () => {
        expect(formatCPForCNPJ('88.601.412/0001-28')).toBe('88.601.412/0001-28');
    });
    
    test('should format CNPJ when receive numbers with wrong mask of CNPJ', () => {
        expect(formatCPForCNPJ('88.601/412-000128')).toBe('88.601.412/0001-28');
    });

    test('should return received param when the param is not CNPJ', () => {
        expect(formatCPForCNPJ('103')).toBe('103');
    });

    test('should return undefined when param is undefined', () => {
        expect(formatCPForCNPJ('')).toBe('');
    });
    
});