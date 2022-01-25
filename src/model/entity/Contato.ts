export class Contato {

  private _nome: string;
  private _telefone: string;
  private _email: string;
  private _dataNascimento: Date;

  constructor(nome: string, telefone: string, email: string, dataNascimento: Date) {
      this._nome = nome;
      this._telefone = telefone;
      this._email = email;
      this._dataNascimento = dataNascimento;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    if (nome && nome.length > 0) {
      this._nome = nome;
    }
    else {
      console.log('Nome é inválido');
    };
  };
};
