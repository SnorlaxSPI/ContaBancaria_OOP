import { ContaBancaria } from './models/ContaBancaria';
import { Router } from 'express';

const router = Router();

const conta1 = new ContaBancaria();

conta1.numero = '01234-5';
conta1.agencia = '1234-5';
console.log(conta1);

//let saldoAtual: number = conta1.consultar();
//console.log(`Saldo Inicial: ${saldoAtual}`);
//console.log('----------------');
//
//let deuCerto: boolean = conta1.depositar(50);
//
//if (!deuCerto) {
//  console.log('Não foi possível realizar o depósito');
//} else {
//  console.log('Depositou..: 50');
//  saldoAtual = conta1.consultar();
//  console.log(`Saldo Final: ${saldoAtual}`);
//  console.log('----------------');
//};
//
//deuCerto = conta1.depositar(150);
//if (!deuCerto) {
//  console.log('Não foi possível realizar o depósito');
//} else {
//  console.log('Depositou..: 150');
//  saldoAtual = conta1.consultar();
//  console.log(`Saldo Final: ${saldoAtual}`);
//  console.log('----------------');
//};
//
//deuCerto = conta1.sacar(200);
//if (!deuCerto) {
//  console.log('Não foi possível realizar o saque');
//} else {
//  console.log('Sacou......: 200');
//  saldoAtual = conta1.consultar();
//  console.log(`Saldo Final: ${saldoAtual}`);
//  console.log('----------------');
//};

export { router };