//scope is by defalut global
// var name ="Aana";
// function showname()
// {var marks=10;
//     console.log(name);
// }
// showname()
// console.log(marks);







// var x=0;
// //global scope
// function first ()
// {
//     //local scope 
//     var x = 1;
//     console.log(x);
//     function childOfFirst()
//     {
//         var x = 2;
//         console.log(x);
//     }
//     childOfFirst()
// }
// first()
// //global scope
// function second()
// {
//     console.log(x);
     
// }
// second()





var x=10
{
    var x=1;
    console.log(x);
}
console.log(x);








if(true)
{
    var foo ='bar';

}
console.log(foo);







  //lexical scope
  function Dada ()

  {
    var name ='rss';
    function papa()
    {
        console.log(name);
        function beta()
        {
            var likes='coding';
        }
        console.log(likes);
        beta()

    }
    papa()
  }
  Dada()