let emialinsert = prompt("La tua e-mail e:"); //inserisci email

let arraymail = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"]; // inizializa lista
let flag = 0;
let emailout;
for (let i = 0; i < arraymail.length; i++) {
    if (emialinsert == arraymail[i]) {//vedi se email inserito che o non che in lista
        flag = 1;
        emailout = arraymail[i]
    }
}
if (flag) {
    console.log(`La email inserita e: ${emailout} `);
} else {
    console.log(`La email inscerita non che in lista se vuoi aggungere dentro la lista?`);
    let metti = prompt("1--si , 0--no");
    if (metti) {
        arraymail[(arraymail.length)] = emialinsert;//metti un altro elemento con la nostra email lista
    }

}
console.log(`Lista e-mail accetabile e: `);
for (let i = 0; i < arraymail.length; i++)
    console.log(arraymail[i]); //stampa la lista 
console.log(`-------------------------------------------------------
-----------Gioco dei dadi con random numeri------------`)
let computer = Math.floor((Math.random() * 6) + 1);
let user = Math.floor((Math.random() * 6) + 1);
if (computer == user) {
    console.log(`Sonno iguale vinto nessuno`);
}
else {
    if (computer > user)
        console.log(`Vinto Computer C:${computer} U:${user}`);
    else
        console.log(`Vinto Utente C:${computer} U:${user}`);
}