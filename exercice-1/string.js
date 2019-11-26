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
    return capitalize(str).split(" ").join("");
}


//snake_case
function snake_case(str) {
    if(typeof str !== "string" || !str ) return '';
    return str.split(" ").join("_").toLowerCase();
}

console.log(snake_case(""));
console.log(snake_case("Test"));
console.log(snake_case("  test"));
console.log(snake_case("test Test tst"));
console.log(snake_case(""));
console.log(snake_case(null));
console.log(snake_case({}));