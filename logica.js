import { Personagem } from "./Personagem.js";
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, resolve);
    });
}

// Variáveis do jogo
let heroi = null;
let nomePersonagem = "";
let classe = 0;

// =============================================
// CRIAÇÃO DO PERSONAGEM
// =============================================
export async function criarPersonagem(menuCallback) { // ← ASYNC AQUI!
    console.log("\n=== CRIAÇÃO DE PERSONAGEM ===");
    
    nomePersonagem = await perguntar("Digite o nome do Personagem: "); // ← AWAIT!
    classe = Number(await perguntar("Selecione a Classe (1-7) \n 1:Guerreiro \n 2:Feiticeiro \n 3:Mago \n 4:Clérigo \n 5:Espadachim \n 6:Assassino \n 7:Arqueiro\n")); // ← AWAIT!
    
    if (!jogar()) {
        console.log("❌ Classe inválida. Voltando ao menu...");
        await perguntar("\nPressione Enter para continuar..."); // ← AWAIT!
        menuCallback();
        return;
    }
    
    // Cria o herói com valores iniciais
    heroi = new Personagem(nomePersonagem, classe, 1, 100, 20);
    
    console.log(`\n✅ Personagem ${heroi.nomePersonagem} criado com sucesso!`);
    await perguntar("\nPressione Enter para entrar na masmorra..."); // ← AWAIT!
    await masmorra(menuCallback); // ← AWAIT!
}

function jogar() {
    const classes = {
        1: "Guerreiro",
        2: "Feiticeiro",
        3: "Mago",
        4: "Clérigo",
        5: "Espadachim",
        6: "Assassino",
        7: "Arqueiro"
    };
    
    if (classes[classe]) {
        console.log(`\n 🤣 Você selecionou a Classe: ${classes[classe]}`);
        return true;
    } else {
        console.log("Classe inválida! Tente novamente.");
        return false;
    }
}

async function masmorra(menuCallback) { // ← ASYNC AQUI!
    if (!heroi) {
        console.log("Nenhum personagem criado!");
        menuCallback();
        return;
    }
    
    console.log(`\n🏰 Entrando na Masmorra - Level ${heroi.Level} 🏰`);
    
    const level = heroi.Level;
    
    if (level >= 1 && level <= 10) {
        console.log("Você está na Masmorra Level 1-10 | Goblins Dourados e Cavaleiros Sanguinários aparecem!");
        await lutar(5, 8, menuCallback); // ← AWAIT!
    } 
    else if (level >= 11 && level <= 20) {
        console.log("Você está na Masmorra Level 11-20 | Orcs Brutais e Magos das Trevas aparecem!");
        await lutar(10, 12, menuCallback); // ← AWAIT!
    } 
    else if (level >= 21 && level <= 30) {
        console.log("Você está na Masmorra Level 21-30 | Dragões Alados e Paladinos Negros aparecem!");
        await lutar(15, 18, menuCallback); // ← AWAIT!
    } 
    else if (level >= 31 && level <= 40) {
        console.log("Você está na Masmorra Level 31-40 | Berserkers Malignos e Feiticeiros Sombrios aparecem!");
        await lutar(20, 25, menuCallback); // ← AWAIT!
    } 
    else if (level >= 41 && level <= 50) {
        console.log("Você está na Masmorra Level 41-50 | Trolls Gigantes e Sereias do Subterrâneo aparecem!");
        await lutar(28, 32, menuCallback); // ← AWAIT!
    } 
    else if (level >= 51 && level <= 60) {
        console.log("Você está na Masmorra Level 51-60 | Guerreiros do Submundo e Necromantes aparecem!");
        await lutar(35, 40, menuCallback); // ← AWAIT!
    } 
    else if (level >= 61 && level <= 70) {
        console.log("Você está na Masmorra Level 61-70 | Ursos Raivosos e Arqueiros de Gelo aparecem!");
        await lutar(42, 48, menuCallback); // ← AWAIT!
    } 
    else if (level >= 71 && level <= 80) {
        console.log("Você está na Masmorra Level 71-80 | Titã da Montanha e Golem de Pedra aparecem!");
        await lutar(50, 55, menuCallback); // ← AWAIT!
    } 
    else if (level >= 81 && level <= 90) {
        console.log("Você está na Masmorra Level 81-90 | Pikete Alado e Lanceiro do Mal aparecem!");
        await lutar(60, 65, menuCallback); // ← AWAIT!
    } 
    else if (level >= 91 && level <= 100) {
        console.log("Você está na Masmorra Level 91-100 | BOSS TITÃ COLOSSAL apareceu!");
        await lutar(100, 0, menuCallback); // ← AWAIT!
    } 
    else {
        console.log("Masmorra Encerrada - Level Máximo Atingido!!!");
        console.log("Parabéns! Você zerou o jogo!");
        menuCallback();
    }
}

async function lutar(dano1, dano2, menuCallback) { // ← ASYNC AQUI!
    console.log("\n COMBATE INICIADO ");
    
    // Primeiro inimigo ataca
    console.log("\n Primeiro inimigo ataca!");
    aplicarDano(heroi, dano1);
    
    if (heroi.Vida <= 0) {
        await gameOver(menuCallback); // ← AWAIT!
        return;
    }
    
    // Segundo inimigo ataca
    if (dano2 > 0) {
        console.log("\n Segundo inimigo ataca!");
        aplicarDano(heroi, dano2);
        
        if (heroi.Vida <= 0) {
            await gameOver(menuCallback); // ← AWAIT!
            return;
        }
    }
    
    // Vitória
    console.log(`\n VITÓRIA! ${heroi.nomePersonagem} sobreviveu!`);
    heroi.Level++;
    console.log(`⬆ Level up! Agora você é level ${heroi.Level}`);
    
    // Recupera vida
    heroi.Vida = Math.min(100, heroi.Vida + 20);
    heroi.Defesa = 20;
    
    console.log(`❤️ Vida recuperada: ${heroi.Vida}`);
    
    // Pergunta se quer continuar
    const continuar = await perguntar("\nContinuar para próxima masmorra? (s/n): "); // ← AWAIT!
    if (continuar.toLowerCase() === 's') {
        await masmorra(menuCallback); // ← AWAIT!
    } else {
        console.log("Voltando ao menu...");
        await perguntar("\nPressione Enter para continuar..."); // ← AWAIT!
        menuCallback();
    }
}

function aplicarDano(alvo, dano) {
    console.log(`💥 Dano recebido: ${dano}`);
    
    if (alvo.Defesa > 0) {
        alvo.Defesa -= dano;
        
        if (alvo.Defesa < 0) {
            alvo.Vida += alvo.Defesa;
            alvo.Defesa = 0;
        }
        
        console.log(`🛡️ Defesa restante: ${alvo.Defesa}`);
    } else {
        alvo.Vida -= dano;
    }
    
    console.log(`❤️ Vida restante: ${Math.max(0, alvo.Vida)}`);
}

async function gameOver(menuCallback) { // ← ASYNC AQUI (JÁ TAVA!)
    console.log("\n══════════════════════════════");
    console.log("💀 GAME OVER 💀");
    console.log("══════════════════════════════");
    
    const jogarNovamente = await perguntar("Deseja jogar novamente? (s/n): "); // ← JÁ TINHA AWAIT!
    if (jogarNovamente.toLowerCase() === 's') {
        menuCallback();
    } else {
        console.log("Até mais, guerreiro!");
        rl.close();
        process.exit(0);
    }
}