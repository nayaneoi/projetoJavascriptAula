import { IEscritor } from "./IEscritor";
import { IPintor } from "./IPintor";
import { Pessoa } from "./Pessoa";

export class Estudante extends Pessoa implements IEscritor, IPintor{

    // Atributos

    // Construtos
    constructor(nome: string){
        super (nome)
    }
   
    // Métodos de Acesso

    // Métodos de Auxiliares
    public saudacao(): void{
        console.log("Olá, meu nome é ")
    }

    public escrever(): void {
        console.log("Escrevendo com o computador...");
    }

     public pintar(): void {
        console.log("Pintando com Giz ");
    }
    

}