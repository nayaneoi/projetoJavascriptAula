export class Transporte { // SUPER CLASSE - CLASSE MÃE

    // Atributo
    private _capacidade: number

    // Método Construtor
   constructor(capacidade: number) {
		this._capacidade = capacidade;
	}

    // Método de Acesso - Get Set
    public get capacidade() {
		return this._capacidade;
	}

	public set capacidade(novaCapacidade: number) {
		this._capacidade = novaCapacidade;
	}

    // Métodos de suporte / Auxiliares
    public visualizar(): void {
		
		console.log("\n\n************************************************************");
		console.log("Dados do Meio de Transporte:");
		console.log("****************************************************************");
		console.log("Capacidade (número de passageiros): " + this._capacidade);
	}
}