export class ContaBancaria {
   private _saldo: number;
   private _numero: string;
   private _agencia: string;

  constructor() {
    this._saldo = 0;
    this._numero = '00000-0';
    this._agencia = '0000-0';
  }

  consultar() {
    return this._saldo;
  }

  depositar(valor: number): boolean {
    if (valor >= 0) {
      this._saldo += valor;
      return true;
    };
    return false;
  };

  sacar(valor: number): boolean {
    if (valor >= 0 && this._saldo >= valor) {
      this._saldo -= valor;
      return true;
    };
    return false;
  };
};
