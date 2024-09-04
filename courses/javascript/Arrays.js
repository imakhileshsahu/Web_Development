//Arrays is a object in javascript
//const num = [1,1,2,2,3,4,5,7,8,9];
const num = new Array (1,1,2,2,3,4,5,7,8,9);
//push
num.push(20);
//console.log(num[num.length-1]);
//unshift is use for put value in starting 
num.unshift(0);

//pop
num.pop();
//shift is an remove value form starting
num.shift();
const names=['aman','ayu','adi','adii']
//indexOf
names.indexOf('adii');
//lastindexOf
names.lastIndexOf('adi');
//includes is for searching if there is exist or not  .simpli true or false
//include work only on primitive data type not i refernce
// names.includes('adi')
//console.log(names.includes('adi'));
let channels =[{
    name:'apni kaksha',
    subscriber:2000
},{name:'apna college',
subscriber:5000},{
    name:'apna bhai',
    subscriber:3000
}];
//find function
// console.log(channels.find(function(element){
//     return element.ubscriber ===5000
//}))
//Arrow function
// console.log(channels.find((element) => {
//     return element.name === 'apni kaksha'
// }))
//concat methode
//slice method is like if choose value print and rest all are remove
//let name1=['ama','asa'];
//let name2=['amai','asar'];
// let name3=name1.concat(name2)
// console.log(name3.slice(2,3))
//use spread operator(...)
//  
//for of loop
for(let name of names){
   // console.log(name)
}
//for -each
names.forEach(function(name,index){
//console.log(name,index)

})
//string create
//join
let student =['s','h','i','v','a']
 student=student.join('_');
 //split

console.log(student.split('_'))
//filter function
let cities=[{
    name:'mumbai',population:30000040},
    {name:'delhi',population:60000040},
    {name:'ptna',population:50000040},
   { name:'lko',population:40000040}
];
//console.log(cities.filter(city => city.population>30000050))
console.log(cities.map(city => city.population*2))

