export class ExcecaoSimples extends Error { // herança do erro

    constructor(message: string) {
        super(); //chamando o metodo construtor sem atributos da classe erro/ ele ta herdando as caracteristicas de Erro, mas quem vai lidar com os atributos pe Excecao Simples
        this.name = 'Exceção Simples'
        this.message = message;
    }
}