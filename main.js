// this is input tag 
let passwordBox = document.getElementById("password");
let length = 12;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "123456789";
let symbol = "@#$%^&*()|{}{[[]]]<>?/-=";


let allChars = upperCase + lowerCase + number + symbol;


function creatPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * symbol.length)];
    }
    passwordBox.value = password;
    console.log(password)
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}


