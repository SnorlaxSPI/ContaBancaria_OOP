import { ContaBancaria } from './models/ContaBancaria';
import { Router } from 'express';

const router = Router();

const conta1 = new ContaBancaria();

conta1.numero = '01234-5';
conta1.agencia = '1234-5';
console.log(conta1);

export { router };