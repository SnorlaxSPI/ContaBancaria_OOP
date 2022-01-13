import { ContaBancaria } from "./ContaBancaria";

describe('Testa as funcionalidades de uma conta bancária', () => {

    test('Deve criar uma conta bancária com número e agência padrões', () => {
        const conta = new ContaBancaria();
        expect(conta.agencia).toBe('0000-0');
        expect(conta.numero).toBe('00000-0');
    });

    test('Deve criar uma conta bancária com o número e a agência especificados', () => {
        const numero = '01234-5';
        const agencia = '0123-4';
        const conta = new ContaBancaria(numero, agencia);
        expect(conta.agencia).toBe(agencia);
        expect(conta.numero).toBe(numero);
    });
});