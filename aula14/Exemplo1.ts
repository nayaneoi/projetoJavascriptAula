export function main() {

    let numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log("Exibir os itens\n");

    // Exibir os itens da Lista sem Arrow Functions
    // for(let numero of numeros){

    // console.log(numero);

    // }

    // numeros.forEach(function(numero: number){ // for .. each => para ... cada
    //     console.log(numero)
    // })

    numeros.forEach(numero => console.log(numero))

   
   
    console.log("\nExibir os itens somados com eles mesmos\n");

    // Exibir os itens da Lista dobrados sem Arrow Functions
    // for(let numero of numeros){

    //     console.log(numero + numero);

    // }

    numeros.forEach(numero => console.log(numero+numero))

    console.log("\nExibir os itens pares da lista\n");

    // Exibir apenas os elementos pares da Lista sem Arrow Functions
    // for(let numero of numeros){
    //     if (numero % 2 == 0)
    //         console.log(numero);
    // }

    numeros.forEach(item =>{
        if(item %2 == 0) console.log(item)
    })
} 
main ()

// forEach é um método de array que executa uma função para 
// cada elemento em um array, tornando a iteração mais limpa e legível
// Não pode usar as arrow functions nos metodos construtores, e dentros de uma classe 
// ela não tem acesso ao This
//ela serve exclusivamente para ser escrita e executada naquele momento
// ela é uma função anônima, não tem nome, não é possivel chama-la em outro momento
