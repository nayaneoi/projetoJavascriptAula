import { Transporte } from "./Transporte";

export class Terrestre extends Transporte{ // CLASSE FILHA / SUB-CLASSE

    private _numeroRodas: number;
	private _velocidade: number;

    constructor(capacidade: number, numeroRodas: number, velocidade: number){
        super(capacidade) // Referência ao método construtor da classe Mãe
        
        // Para entender melhor o super(capacidade) é como um =>Transporte(capacidade)
        // É como se eu tivesse chamado o inicializador da classe Terrestre para esta super
        
        this._numeroRodas = numeroRodas
        this._velocidade = velocidade
    }

    public get numeroRodas() {
		return this._numeroRodas;
	}

	public set numeroRodas(numeroRodas: number) {
		this._numeroRodas = numeroRodas;
	}

	public get velocidade() {
		return this._velocidade;
	}

	public set velocidade(velocidade: number) {
		this._velocidade = velocidade;
	}

}