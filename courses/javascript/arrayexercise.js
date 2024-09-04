const char=[{
    name:'tarak mehta',
    height:'172',
    mass:'77',
    eye_color:'brown',
    gender:'male'
},
{
    name:'jethalal',
    height:'145',
    mass:'136',
    eye_color:'black',
    gender:'male'
},
{
    name:'babita ji',
    height:'150',
    mass:'49',
    eye_color:'grey',
    gender:'female'
},
{
    name:'krishnan iyer',
    height:'162',
    mass:'84',
    eye_color:'black',
    gender:'male'
}
];
//get an array of all names
const names=char.map(ch => ch.name)
//console.log(names)
//get an array of object with just name and height properties
const propertiesOfch = char.map(ch =>{
    return{
        name:ch.name,
        height:ch.height
    }
})
//console.log(propertiesOfch)
//get the total height of all characters
const totalheight=char.reduce((prevHeight,char)=>{
    return prevHeight+Number(char.height);
},0);
//console.log(totalheight)
//get cahracter with mass greater than 100
const greaterthanmass= char.filter((char)=>{return char.mass>100});
//console.log(greaterthanmass);
//get all male characters
const  malech=char.filter((char)=>{
    return char.gender=='male'
});
//console.log(malech)
//sort gy name
const name=char.sort((char1,char2)=>{
    if(char1.name<char2.name){return -1;
    }
    if(char1.name>char2.name){return 1;
    }
    return 0;
})
//console.log (name)
//sort by gender
const gender=char.sort((char1,char2)=>{
    if(char1.gender<char2.gender){return -1;
    }
    if(char1.gender>char2.gender){return 1;
    }
    return 0;
})
// console.log (gender)
//does every charater have mass more than 40? 
//console.log(char.every((char) => char.mass >40))
//does every charater have blue eye? 
//console.log(char.every((char) => char.eye_color=='blue'))
//is there at least one male character>?
// console.log(char.some((char)=>char.gender))
//is there at least one character taller than 200?
console.log(char.some((char)=>char.height>200))