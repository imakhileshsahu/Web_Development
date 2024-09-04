//declaration a class
class Product 
{
    //constructor(itemName,price,discount,productCode)
    constructor(itemName)
    {
        this.itemName=itemName;
    //     this.price=price;
    //     this.discount=discount;
    //     this.productCode=productCode;
    // 
    } 
    getItemName(){
        return this.itemName +" is a product";

    }
}
class Furniture extends Product{
    constructor(itemName){
        super (itemName);//super function is  a funstion whisch is call a parent class costructor. 

    }
    getItemName(){
        return this.itemName+" is a furniture";
    }
}
let pencil =new Product('pencil');
let chair =new Furniture('chair');
console.log(pencil.getItemName());
console.log(chair.getItemName());

//let pencil =new Product('pencil',20,2,'p10');
// console.log(pencil)
// //calss expression use
// const Product1=class{
//     constructor(itemName,price,discount,productCode)
//     { this.itemName=itemName;
//         this.price=price;
//         this.discount=discount;
//         this.productCode=productCode;
//     }
//     get getDiscountValue(){
//         return this.discount;

//     }
//     set setDiscountValue(value){
//         this.discount=value;

//     }
//     discountValue(){
//         return this.discount*this.price/100
//     }
    
    
// };
// let chair =new Product1('chair',499,23,'c20')
// console.log(chair)
// console.log(chair.getDiscountValue)
// chair.setDiscountValue=20;
// console.log(chair.getDiscountValue)
 console.log(chair.discountValue())

  