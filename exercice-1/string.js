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
function snake_case(str) {
    if(typeof str !== "string" || !str ) return '';
    return str.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
    //return str.split(" ").join("_").toLowerCase();
}

//leet
// function leet(str) {
//     if(typeof str !== "string" || !str ) return '';
//     // let chrs = {'a':'4','e':'3','i':'1','y':'7','u':'(_)','o':'0'};
//     // return str.replace(/[aeiouy]/g);
// }


// A => 4
// E => 3
// I => 1 
// O => 0
// U => (_)
// Y => 7

console.log(leet("test Test tst"));
