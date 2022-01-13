import { ContaBancaria } from './models/ContaBancaria';

const cb = new ContaBancaria('12345-6', '0123-4');

let saldoAtual: number = cb.consultar();
console.log(`Saldo Inicial: ${saldoAtual}`);

let itsOk:boolean = cb.depositar(50);
if (!itsOk) {
  console.log('Não foi possível realizar o depósito')
} else {
  saldoAtual = cb.consultar()
  console.log(`Saldo Atual: ${saldoAtual}`);
}

itsOk = cb.depositar(100);
if (!itsOk) {
  console.log('Não foi possível realizar o depósito')
} else {
  saldoAtual = cb.consultar()
  console.log(`Saldo Atual: ${saldoAtual}`);
}

itsOk = cb.sacar(30);
if (!itsOk) {
  console.log('Não foi possível realizar o saque')
} else {
  saldoAtual = cb.consultar()
  console.log(`Saldo Atual: ${saldoAtual}`);
}

itsOk = cb.sacar(5);
if (!itsOk) {
  console.log('Não foi possível realizar o saque')
} else {
  saldoAtual = cb.consultar()
  console.log(`Saldo Atual: ${saldoAtual}`);
}

//cb.numero = '01234-5';
//cb.agencia = '123-5'
console.log(cb);
