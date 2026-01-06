// Declaração da função
export function somar(a: number, b:number): number{
    //Lógica da função
    let resultado: number = a + b // 2 + 2 => resultado = 4
    
    return resultado
}

export function logar(usuario: number | string): void{  // | => Pipe (indica que um parametro pode ser de um tipo ou de outro) (exemplo a entrada no Instagram, posso usar celular ou email)/ ||

    if (typeof(usuario) === "number" ) // o typeof é responsavel por encontrar o tipo primitivo do usuario do exemplo
        console.log("\nVocê está acessando o Insta pelo Celular");
    else
        console.log("\nVocê está acessando o Insta pelo email");
}





export function transformarNumeroEmExtenso(valor: number): string {
    let texto: string

    if(valor === 5){
        texto = "Valor digitado é cinco"
    } else{
        texto = "Você digitou um número diferente de cinco"
    }

     return texto
   

}

// Eu posso deixar as minhas funções prontar em um arquivo e depois importar em outro, como se fosse uma biblioteca.
// É só colocar o export na frente da função e na outra pasta teste eu vou no final da palvra que esta dando erro e aperto "Crtl + espaço"
// e seleciono a função, assim importando ela.
