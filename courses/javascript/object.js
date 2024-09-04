// let lecture =10;
// let section =3;
// let title ='javascript';
 
 const course ={
    lecture: 10,
     section: 3,
     title:'javascript',
    notes:{
         introduction : "welcome to js course"
     },
 enroll()
     {
         console.log('you are ssuccessfully enrooled');
     }
 }


 console.log (course);

// console.log(course)

// course.price=900;
//fuction factory
//  function createCourse(title){
//     return{
//          title:title,
//       enroll()
//     {
//       console.log('you are ssuccessfully enrooled');
//    }
// }
//  }
//  const course =createcourse('javascript');
 //course.enroll()

// console.log(course)
//constructor function
//  function Course(title){
//      this.title=title,
//     this.enroll=function()
//  {  console.log('you are ssuccessfully enrooled');
//  }
//  }
// // const course =new Course ('javascript');
// // //delete course.title;
// // course.enroll();
// //function be as like a object 
// const Course_1 =new Function('title',`  this.title=title,
// this.enroll=function()
// {  console.log('you are ssuccessfully enrooled');
// }`)//
// // const course_2= new Course_1('javascript');
// // course_2.enroll();
// //primitive data type
// let number =10;
// //pass by value
// let number_2=number
// //console.log (number);
// //console.log(number_2);
// //reference datatype
// let obj={number:10};
// //pass by reference
// let obj2=obj;
// obj.number=15;
// //console.log(obj)
// //console.log(obj2)
// const course={
    
//          title:'javascript',
//       enroll()
//     {
//       console.log('you are ssuccessfully enrooled');
//    }
// }
//const course_1={...course}//value of cousre one byb one copied
//course_1.title="c++"//another value can be chnaged
// const course_1=Object.assign({},course)
// course_1.title='c++'//again this method value can be changed
//for in loop
// for (let key in course){
//     console.log(key,course[key]);
// }
//for off loop
// for(let key of Object.keys(course))
// {
//     console.log(key,course[key]);
// }
// const course_1={};
// for(let key of Object.keys(course))
//  {
//     course_1[key]=course[key]
//  }
