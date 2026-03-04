export class Personagem {
    constructor(nomePersonagem, Classe, Level = 1, Vida = 100, Defesa = 20) {
        this.nomePersonagem = nomePersonagem;
        this.Classe = Classe;
        this.Level = Level;
        this.Vida = Vida;
        this.Defesa = Defesa;
    }
}