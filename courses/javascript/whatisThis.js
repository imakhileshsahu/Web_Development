// let counter ={
//     count :0,
//     increment: function(){
//         counter.count++;

//     }


// }
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter);




// //factory function 
// let count = createCount()
//     function  createCount(){
// return{
//     count:0,
//     increment:function(){
//         count.count++;
//     }
// }
//     }
//     count.increment();
// count.increment();
// count.increment();
// count.increment();
// console.log(count);


// var  count=0;
// function inrccounter(){
//     this.count++;
//     console.log(this);

// }
// inrccounter();
// inrccounter();
// inrccounter();
// inrccounter();
// console.log(count);





function  Car(name){
    this.name=name;
    this.start=function(){
        console.log(this.name+'started');
        console.log(this);

    }
}
//let swift = new Car('Swift');
let swift = Car('Swift');
//swift.start();
console.log(name);