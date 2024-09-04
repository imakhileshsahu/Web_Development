let bread1 = prompt("which bread would you like to have:-");
let veggies1 = prompt("what are your favorite veggies");
let sauce1 = prompt("which sauce would you like to have:-");
function makesandwich(bread,veggies,sauce)
{
    let sandwich = (bread+"bread"+veggies+" "+sauce+" sandwich");
    return sandwich;

}
let vegsandwich=makesandwich(bread1,veggies1,sauce1);
console.log(vegsandwich);