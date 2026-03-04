function jogar(){
let nomePersonagem = prompt("Digite o nome do Personagem: ")
let classe = Number(prompt("Selecione a Classe: "))
 
switch(classe){
    case 1:
        console.log("Você selecionou a Classe Guerreiro | Deseja continuar ?")
    break;
    case 2:
        console.log("Você selecionou a Classe Feiticeiro | Deseja continuar ?")
    break;
    case 3:
        console.log("Você selecionou a Classe Mago | Deseja continuar ?")
    break;
    case 4:
        console.log("Você selecionou a Classe Clérigo | Deseja continuar ?")
    break;
    case 5:
        console.log("Você selecionou a Classe Espadachim | Deseja continuar ?")
    break;
    case 6:
        console.log("Você selecionou a Classe Assassino | Deseja continuar ?")
    break;
    case 7:
        console.log("Você selecionou a Classe Arqueiro | Deseja continuar ?")
    break;
    default:
        console.log("Você selecionou uma Classe que não existe... Tente Novamente.")
}
 

 
}