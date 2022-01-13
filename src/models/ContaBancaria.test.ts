import { ContaBancaria } from "./ContaBancaria";

describe('Testa as funcionalidades de uma conta bancária', () => {

  test('Deve criar uma conta bancária com número e agência padrões', () => {
    const cb = new ContaBancaria();

    expect(cb.numero).toBe('00000-0');
    expect(cb.agencia).toBe('0000-0');
  });

  test('Deve criar uma conta bancária com o número e a agência especificados', () => {
    const numero = '12345-6';
    const agencia = '0123-4';

    const cb = new ContaBancaria(numero, agencia);

    expect(cb.numero).toBe(numero);
    expect(cb.agencia).toBe(agencia);
  });

  test('O saldo de uma conta recém criada deve ser igual a zero', () => {
    const cb = new ContaBancaria();
    expect(cb.consultar()).toBe(0);
  });

  test('O saldo deve ser alterado corretamente após se realizar os depósitos', () => {
    const cb = new ContaBancaria();
    cb.depositar(20);
    cb.depositar(50);
    cb.depositar(100);
    expect(cb.consultar()).toBe(170);
  });

  test('O saldo deve ser alterado corretamente após se realizar os saques', () => {
    const cb = new ContaBancaria();

    cb.depositar(500);
    cb.sacar(150.54);
    expect(cb.consultar().toFixed(2)).toBe('349.46');
  })
});