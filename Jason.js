let tueur ={
    prenom : 'Jason',
    Hp : 100
}

let personnage ={
    roles : ['sportif/ve','blond/e','gameur/euse','populaire','nerd'],
    noms : ['Emma','Marie','Stephie','Leo','Opale'],
}


class survivant{
    constructor(){
        this.nom = personnage.noms[Math.floor(Math.random() * personnage.noms.length)];
        this.role = personnage.roles[Math.floor(Math.random() * personnage.roles.length)];
        this.mort = Math.floor(Math.random() * 10);
        this.esquive = Math.floor(Math.random() * (10 - this.mort));
        this.mortdegat = 10-this.mort-this.esquive;
        this.probabilite = [];
        for (let k=0 ; k<this.esquive ; k++){
            this.probabilite.push('Esquive');
        }
        for (let k=0 ; k<this.mort ; k++){
            this.probabilite.push('Mort');
        }
        for (let k=0 ; k<this.mortdegat ; k++){
            this.probabilite.push('Mort et degat');
        }
    }
}
let gens1 = new survivant();
let gens2 = new survivant();
let gens3 = new survivant();
let gens4 = new survivant();
let gens5 = new survivant();
console.log (gens1 );
console.log (gens2 );
console.log (gens3 );
console.log (gens4 );
console.log (gens5 );

let vivants = [gens1,gens2,gens3,gens4,gens5];
let morts = [];

while(tueur.Hp > 0 || vivants > 0){  
    let gensrandom = vivants[Math.floor(Math.random() * vivants.length)];
    let action = gensrandom.probabilite[Math.floor(Math.random() * gensrandom.probabilite.length)];
    if (action=='Mort'){
        morts.push(gensrandom.nom);
        vivants.splice(vivants.indexOf(gensrandom),1);
        tueur.Hp-=15;
        console.log(`Jason a attrape et tue ${gensrandom.nom} mais ce dernier avant de mourir a inflige 15 degats à Jason.`);
        console.log(`il reste donc ${tueur.Hp} points de vie à Jason.`);if(tueur.Hp<=0){
    console.log("Jason est mort.");
    console.log(`Les survivants ont gagne, mais ${morts} ont peri durant la lutte.`);
} else if (vivants.length==0) {
    console.log("Jason a elimine tous les survivants.");
} else if (vivants.length != 0) {
    console.log("Survivant(e)s:")
    vivants.forEach((element) => console.log(element.nom));
} else {
    console.log("Ainsi personne n'a survecu à cette lutte.");
}
    }
}






 