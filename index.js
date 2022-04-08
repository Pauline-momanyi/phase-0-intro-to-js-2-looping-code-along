// Code your solutions in this file
var sNames = []
function writeCards(strNames, action){
    
    for (let i=0; i<strNames.length;i++){
       sNames.push(`Thank you, ${strNames[i]}, for the wonderful ${action} gift!`)
    // [...sNames,`Thank you, ${strNames[i]}, for the wonderful ${action} gift!`]
    // return strNames.map((name)=>`Thank you, ${name}, for the wonderful ${action} gift!`
    }
    
    return sNames    
}

function countDown(num){
    let i = num;
    while(i>=0){
        console.log(i);
        i--;
    }
}