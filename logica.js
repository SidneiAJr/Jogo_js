import{}from

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
} }

function aplicarDano(personagem, dano) {
    if (personagem.Defesa > 0) {
        personagem.Defesa -= dano;

        if (personagem.Defesa < 0) {
            personagem.Vida += personagem.Defesa; 
            personagem.Defesa = 0;
        }

        console.log(`Defesa restante: ${personagem.Defesa}`);
    } else {
        personagem.Vida -= dano;
        console.log(`Vida restante: ${personagem.Vida}`);
    }

    if (personagem.Vida <= 0) {
        console.log("Você morreu!");
    }
}


function lutar() {

    let Personagem = new Personagem();

    let danoGoblin = 5;
    let danoCavaleiro = 8;

    console.log("Goblin ataca!");
    aplicarDano(heroi, danoGoblin);

    console.log("Cavaleiro ataca!");
    aplicarDano(heroi, danoCavaleiro);
}

function masmorra(){
let masmorra = prompt("Digite seu level para entrar na Masmorra: ")

    if (level >= 1 && level <= 10) {
        console.log("Você está na Masmorra Level 1-10 | Goblins Dourados e Cavaleiros Sanguinários aparecem!");
        jogar()
        lutar()
        aplicarDano()
        personagem()
    } else if (level >= 11 && level <= 20) {
        console.log("Você está na Masmorra Level 11-20 | Orcs Brutais e Magos das Trevas aparecem!");
        jogar()
        lutar()
        aplicarDano()
        personagem()
    
    } else if (level >= 21 && level <= 30) {
        console.log("Você está na Masmorra Level 21-30 | Dragões Alados e Paladinos Negros aparecem!");
        jogar()
        lutar()
        aplicarDano()
        personagem()
    
    } else if(level >= 31 && level <= 40){
        console.log("Você está na Masmorra Level 31-40 | Berserkers Malignos e Feiticeiros Sombrios aparecem!");
        jogar()
        lutar()
        aplicarDano()
        personagem()
    }
    else if(level >= 41 && level <= 50){
        console.log("Você está na Masmorra Level 41-50 | Trolls Gigantes e Sereias do Subterranio aparecem!");
        jogar()
        lutar()
        aplicarDano()
        personagem()
    }
    else if(level >= 51 && level <= 60){
        console.log("Você está na Masmorra Level 51-60 | Guerreiros do Submundo e Necromantes aparecem!");
        jogar()
        lutar()
        aplicarDano()
        personagem()
    }else if(level >= 61 && level <= 70){
        console.log("Você está na Masmorra Level 61-70 | Ursos Raivosos e Arqueiros de Gelo aparecem!");
        jogar()
        lutar()
        aplicarDano()
        personagem()
    }else if(level >= 71 && level <= 80){
        console.log("Você está na Masmorra Level 71-80 | Titan da Montanha e Golem de Pedra aparecem!");
        jogar()
        lutar()
        aplicarDano()
        personagem()
    }else if(level >= 81 && level <= 90){
        console.log("Você está na Masmorra Level 81-90 | Pikete Alado e Lanceiro do Mal aparecem!");
        jogar()
        lutar()
        aplicarDano()
        personagem()
    }else if(level >= 91 && level <= 100){
        console.log("Você está na Masmorra Level 91-100 | BOSS TITAN COLOSSAL aparecem!");
        jogar()
        lutar()
        aplicarDano()
        personagem()
    }else{
        console.log("Masmora Encerrada Level Máximo Atingido!!! ")
        jogar()
        lutar()
        aplicarDano()
        personagem()
    }
} 


function personagem(){
    // chamar da classe personagem...
}