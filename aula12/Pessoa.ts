export abstract class Pessoa { // Classe abstrada pode ser usada apenas para criar outra classe, ela não pode ser usada para criar o objeto.

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

    // METODOS AUXILIARES
    public visualizar(): void{
        console.log("***************************************");
        console.log("           Dados da Pessoa             ");
        console.log("***************************************");
        console.log("Nome da pessoa: ", this._nome);
    }

}