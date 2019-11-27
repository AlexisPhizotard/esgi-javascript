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
function leet(str) {
    if(typeof str !== "string" || !str ) return '';
    return str.replace(/[aA]/g,"4").replace(/[eE]/g,"3").replace(/[iI]/g,"1").replace(/[oO]/g,"0").replace(/[uU]/g,"(_)").replace(/[yY]/g,"7");
}

function prop_access(str) {

}

console.log(leet("anaconda"));
