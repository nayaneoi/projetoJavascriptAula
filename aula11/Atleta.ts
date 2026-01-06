export abstract class Atleta { // Classe abstrada pode ser usada apenas para criar outra classe, ela não pode ser usada para criar o objeto.

    private _nome: string;

    constructor (nome: string){
        this._nome = nome;
    }

    public get nome(){
        return this._nome;
    }

    public set nome(nome: string){
        this._nome = nome;
    }

    // MÉTODOS ABSTRATOS - Apenas a assinatura do método / Ele indica apenas o que as classes filhas devem ter, ele não indica como escrever esse metodo
    //por exeplo, todo atleta precisa aquecer, mas cada atleta aquece de uma forma, e essa forma é ditada pelas classes filhas
    public abstract aquecer(): void;


    // METODOS AUXILIARES
    public visualizar(): void{
        console.log("***************************************");
        console.log("           Dados da Pessoa             ");
        console.log("***************************************");
        console.log("Nome da pessoa: ", this._nome);
    }

}