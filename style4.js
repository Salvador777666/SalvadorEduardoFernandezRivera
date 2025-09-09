
function calcular() {
let num1 = parseInt(prompt("Digite"));
let operador = prompt("digite seu signo (+, -, *, /)");
let num2 = parseInt(prompt("Digite"));
if(operador == "+") {
    alert("O resultado e: " + (num1 + num2));
} else if(operador == "-") {
    alert ("O resultado e: " + (num1 - num2) );
} else if(operador == "*") {
    alert("O resultado e: " + (num1 * num2)); 
}  else if(operador == "/") {
    alert("O resultado e: " + (num1 / num2));
}
}
function parImpar() {
let a1 = prompt("digite seu numero");
console.log(a1)
if (a1 % 2 == 0) {
    alert("Seu numero e Par");
} else {
    alert("Seu numero e Impar");
}
}

