
//exercise 01
let square={
    side:5,
    get area (){
        // return this.side *this.side 
        return this.side **2;
    }

}
square.side=10;
square.area=5;
console.log(square.area);





//exercise 02
function stringconcat(separator, ...strings)
{
    let returnVal=' '
    strings.forEach((string, i)=>{
        //returnVal+= string + separator;//method 1
        if(i==strings.length -1){//method 2 
            returnVal+=string;
        }
        else{
            returnVal += string + separator;
        }

    })
    return returnVal;

}
console.log (stringconcat('+','this','is','invalid'))


//exercise 3

// arr=[1, 2,3,4,5,6,7]
// let first= arr[0];
// let second= arr[1];
// let third= arr[2];
// let other = arr.slice(3);

let [first,second,third, ...other]=[1,2,3,4,5,6,7]

console.log(first)
console.log(second)
console.log(third)
console.log(other)

//exercise4
//how to calculate matchstick makes houses


function matchhouse(step)
{
    if(step===0)
    {return 0;}
    else{
        return (step*6)-(step-1);
    }
}
console.log(matchhouse(1));
console.log(matchhouse(4));
console.log(matchhouse(8));







