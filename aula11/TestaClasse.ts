import { Ciclista } from "./Ciclista"
import { Nadador } from "./Nadador"

export function main () {

    // OBJETO DA CLASSE NADADOR
    const nadador: Nadador = new Nadador('Thompson')
    const ciclista: Ciclista = new Ciclista('Israel')

    // Chamo os métodos da classe
    nadador.aquecer()
    nadador.nadar()
    nadador.visualizar()

    ciclista.aquecer()
    ciclista.pedalar()
    ciclista.visualizar()


}

main()