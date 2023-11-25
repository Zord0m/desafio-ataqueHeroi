//definir o herói

class Heroi{
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;    
    }
    //exibir informações do herói
    exibirInfo() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Tipo: ${this.tipo}`);
    }

    //Atacar
    atacar(){
        let ataque;

        const ATAQUE_MAGO = 'usou magia';
        const ATAQUE_GUERREIRO = 'usou espada';
        const ATAQUE_MONGE = 'usou artes marciais';
        const ATAQUE_NINJA = 'usou shuriken';

        //definir o tipo de herói e seu ataque
        switch (this.tipo){
            case 'mago':
                ataque = ATAQUE_MAGO;
                break;
            case 'guerreiro':
                ataque = ATAQUE_GUERREIRO;
                break;
            case 'monge':
                ataque = ATAQUE_MONGE;
                break;
            case 'ninja':
                ataque = ATAQUE_NINJA;
                break;
            default:
                ataque = 'não possui ataque conhecido';
        }

        //exibir texto 
        console.log('O ${this.tipo} ${this.nome} atacou usando ${ataque}');
    }
}