let student ={
    firstname : 'bobby',
    favoritefood : 'benni',
    city: 'paris'
}
let values = Object.values(student)
let total = 0

values.forEach((value) => {
    total += value.length   
});

if (total%2==0){
    console.log('pair')
}else{
    console.log('impair')
}