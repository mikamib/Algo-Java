let personnage ={
    prenom : 'John',
    SanteMentale : 10 
} 

let trajet = {
    feurouges : 30 ,
    radio : ['anissa - wejdene', 'pirates - Xdinary heroes','Megalovania - toby fox','drowning - woodz','the muffin song - tomska'],
    changement : 0
}
let musique = '';

function changemusique(){
    const random_num = Math.floor(Math.random()*5) ;
    musique = trajet.radio[random_num];
    trajet.feurouges -= 1;
    if (random_num == 0){
        musiqueAnissa();
    }
}



function musiqueAnissa(){
    personnage.SanteMentale -= 1 ;
    trajet.changement += 1 ;
    trajet.feurouges -= 1 ;
}

while ( personnage.SanteMentale > 0 && trajet.feurouges > 0 ) {
    changemusique();
    console.log("La musique jouee " + musique + ". Il reste " + trajet.feurouges + " feux rouges . La sante mentale de john est de" + personnage.SanteMentale);
}

if( personnage.SanteMentale <= 0){
    console.log('EXPLOSION');
} else {
     console.log( personnage.prenom + ' est arrive, il a du changer '+ trajet.changement + ' fois de taxis.');
}
    

