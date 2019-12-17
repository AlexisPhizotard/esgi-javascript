// Exercice 1 
//ucfirst
function ucfirst(str) {
    if(typeof str !== "string" || !str ) return '';

    return str[0].toUpperCase() + str.substring(1);
}

//capitalize
function capitalize(str) {
    if(typeof str !== "string" || !str ) return '';

    return str.toLowerCase().split(" ").map(function(item) {
        return ucfirst(item);
    }).join(" ");
}

//camelCase
function camelCase(str) {
    if(typeof str !== "string" || !str ) return '';
    return str.toLowerCase().split(/[^a-zA-Z0-9]/g).map(function(item){
        return ucfirst(item);
    }).join("");
}

//snake_case
// function snake_case(str) {
//     if(typeof str !== "string" || !str ) return '';
//     return strtoLowerCase().replace(/[^a-zA-Z0-9]/g, '_');
// }
function snakecase(str) {
    if (typeof str !== "string" || !str) {
        return "";
    }
    return str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
}

//leet
function leet(str) {
    if(typeof str !== "string" || !str ) return '';
    return str.replace(/[aeiouy]/gi, function(item){
        switch(item) {
            case 'a':
            case 'A':
                return 4;
            case 'e':
            case 'E':
                return 3;
            case 'i':
            case 'I':
                return 1;
            case 'o':
            case 'O':
                return 0;
            case 'u':
            case 'U':
                return "(_)";
            case 'y':
            case 'Y':
                return 7;
        }
    })
}

function verlan(str) {
    if(typeof str !== "string" || !str ) return '';
    return str.split(" ").map(function(word){
        return word.split("").reverse().join('');
    }).join(" ");
}

function yoda(str) {
    if(typeof str !== "string" || !str ) return '';
    return str.split(" ").reverse().join(" ");
}

console.log(yoda("hello world"));


function vig(str, code) {
    if(typeof str !== "string" || !str) return '';

    while(code.length < str.length) {
        code += code;
    }
     let codeIndex = 0;
    return str.split('').map(function(char) {
        // Position dans l'alphabet du char du message
        const charCode = char.charCodeAt(0) - "a".charCodeAt(0); 
        // Verifie char is alpha
        if(charCode < 0 || charCode > 25) return char;  // gere caractere special 
        // Position dans l'alphabet du char du code 
        const codeCode = code[codeIndex++].charCodeAt(0) - "a".charCodeAt(0);
        // On applique vigenere
        const cryptedCode = (charCode + codeCode) % 26;
        // On position du char codé dans la table ASCII 
        const cryptedChar =cryptedCode + "a".charCodeAt(0);
        // On récup le code
        return String.fromCharCode(cryptedChar);
    }).join('');

}

console.log(vig("Hello-world", "foo"));