let emialinsert = prompt("La tua e-mail e:");

let arraymail = ["matteo@gmail.com","fabio@gmail.com","pietro@gmail.com","anna@gmail.com"];
let flag = 0;
let emailout;
for(let i=0;i<arraymail.length;i++){
    if(emialinsert == arraymail[i]){
        flag = 1;
        emailout= arraymail[i]
    }
}
if(flag){
    console.log(`La email inserita e: ${emailout} `);
}else{
    console.log(`La email inscerita non che in lista se vuoi aggungere dentro la lista?`);
    let metti = prompt("1--si , 0--no");
    if(metti){
        arraymail[(arraymail.length)]=emialinsert;
    }
    console.log(`Lista e-mail accetabile e: `);
    for(let i = 0 ; i<arraymail.length;i++)
        console.log(arraymail[i]);
}