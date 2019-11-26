// Exercice 1 
//ucfirst
function ucfirst(str) {
    if(typeof str !== "string" || !str ) return '';

    return str[0].toUpperCase() + str.substring(1);
}

console.log(ucfirst("test"));
console.log(ucfirst("Test"));
console.log(ucfirst("  test"));
console.log(ucfirst("test Test tst"));
console.log(ucfirst(""));
console.log(ucfirst(null));
console.log(ucfirst({}));

//capitalize
function capitalize(str) {
    if(typeof str !== "string" || !str ) return '';

    return str.toLowerCase().split(" ").map(function(item) {
        return ucfirst(item);
    }).join(" ");
}

console.log(capitalize("test"));
console.log(capitalize("Test"));
console.log(capitalize("  test"));
console.log(capitalize("test Test tst"));
console.log(capitalize(""));
console.log(capitalize(null));
console.log(capitalize({}));

//camelCase
function camelCase(str) {
    return capitalize(str).split(" ").join("");
}

console.log(camelCase(""));
console.log(camelCase("Test"));
console.log(camelCase("  test"));
console.log(camelCase("test Test tst"));
console.log(camelCase(""));
console.log(camelCase(null));
console.log(camelCase({}));

//snake_case