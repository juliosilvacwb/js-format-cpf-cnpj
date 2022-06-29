import { formatCPF } from './index';

describe('Tests for formatCPF', () => {

    test('should format CPF when receive only numbers', () => {
        expect(formatCPF('49075215029')).toBe('490.752.150-29');
    });
    
    test('should format CPF when receive numbers with mask of CPF', () => {
        expect(formatCPF('490.752.150-29')).toBe('490.752.150-29');
    });
    
    test('should format CPF when receive numbers with wrong mask of CPF', () => {
        expect(formatCPF('490+752-150.29')).toBe('490.752.150-29');
    });

    test('should return received param when the param is not CPF', () => {
        expect(formatCPF('10')).toBe('10');
    });

    test('should return undefined when param is undefined', () => {
        expect(formatCPF(undefined)).toBe(undefined);
    });
    
});