class pokemon {
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    isluck(){
       return this.luck > Math.random()
    }
    attackpokemon(pokemon){
        if (this.isluck()){
            let degatinflige = this.attack - pokemon.defense
            pokemon.hp -= degatinflige
            console.log(pokemon.name +' a subi '+ degatinflige +' de degat de la part de '+this.name+' , il lui reste alors '+ pokemon.hp + 'point de vie.' )
        }else{
            console.log('l/attaque de '+ this.pokemon + 'a echoue.')
        }
    }
}

let pokemon1 = new pokemon('limonde', 66, 84, 109, 0.6)
let pokemon2 = new pokemon('miasmax', 95, 82, 80, 0.8)

while ( pokemon1.hp > 0 && pokemon2 > 0){
    pokemon1.attackpokemon(pokemon2)
    if (pokemon1.hp <= 0){
        console.log(pokemon1.name +' est mort ')
        console.log(pokemon2 + 'a gagne')
        break
    }   
    pokemon1.attackpokemon(pokemon2)
    if (pokemon2.hp <= 0) {
        console.log(pokemon2.name + 'est mort')
        console.log( pokemon1 + ' a gagne')
        break
    }
}
