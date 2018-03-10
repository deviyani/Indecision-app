// "use strict";

var myMethod = function () {
    console.log(this);
  };
// myFunction();  

//   var myObject = {
//     myMethod: function () {
//       console.log(this,"******");
//     }
//   };
  var myObject = {
    myMethod: myMethod
  };
//   myObject.myMethod();
  var obj1 = {
    a: 2,
    myMethod: myMethod
  };
  
  var obj2 = {
    a: 3,
    myMethod: myMethod
  };
  
//   obj1.myMethod(); // 2
//   obj2.myMethod(); // 3

  obj1.myMethod.call( obj2 ); // ?????
  obj2.myMethod.call( obj1 ); // ?????
  