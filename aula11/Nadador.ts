import { Atleta } from "./Atleta";

export class Nadador extends Atleta{

    constructor(nome: string){
        super(nome)
    }

    // IMPLEMENTAÇÃO DO MÉTODO ABSTRATO DA CLASSE MÃE
    public aquecer(): void { // Estou herdando uma caracteristica da classe abstrata Atleta, e aqui eu estou dizendo o que essa caracteristica vai fazer
        console.log("Estou fazendo Polichinelo.....")
    }

    // MÉTODO ESPECIFICO/PROPRIO DA CLASSE NADADOR
    public nadar(): void{
        console.log("Estou nadando...")
    }
}

// quando o método é void, ele não tem retorno, não da pra responder, ele trava pra que execute o que ta lá.
