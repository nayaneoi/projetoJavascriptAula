export class Conta {

    // ATRIBUTOS DA CLASSE  // Por regra a Classe é Private
    private _numero: number // encapssulamento eu escondo, eu protejo os atributos, para empedir que haja manipulação. Só quem pode mexer é aquela classe.
    private _agencia: number; // Atibutos private começa com _ // os atributos são componetes senssiveis em uma classe, então eu uso o private para que ninguem altere indevidamente
    private _tipo: number;  // private indica que o aributo só pode ser acessivel dentro da Classe
    private _titular: string; // A gente indica quem pode acessar esse atributos de modificador de acesso
    private _saldo: number; // exemplo - uma pasta no Drive, e eu coloco se é publico, privado, ou protegido
    
    // MÉTODO CONSTRUTOR
    // Toda Classe possui obrigatóriamete um método construtor - ex: um formulário de abertura de conta - um formulário de inicialização
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number){ //formulário
        this._numero = numero //o this. é usado para acessar a classe conta, acessar o atributo, por exemplo numero, que vai receber a informação do constructor
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
       
    }   

    // MÉTODOS DE ACESSO  - GET E O SET -> GETTERS E SETTERS
    public set numero(novoValor: number){ //public - Todos os métodos são publicos// SET - modificar, atualizar de forma segura os atributos// e o atributo
        this.numero = novoValor
    } 

    public get numero(){  //GET serve apenas para mostrar de forma segura o valor do atributo
        return this.numero
    }   
    public get agencia() {
        return this._agencia;
    }

    public set agencia(agencia: number) {
        this._agencia = agencia;
    }

    public get tipo() {
        return this._tipo;
    }

    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public get titular() {
        return this._titular;
    }

    public set titular(titular: string) {
        this._titular = titular;
    }

    public get saldo() {
        return this._saldo;
    }

    public set saldo(saldo: number) {
        this._saldo = saldo;
    }

    
}