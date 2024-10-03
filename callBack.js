//      Higher Order Function (forEach loop in array ) 
//      callBack() = It is function to excute for each element in array.
//                   callBack is function passed as an argument to another function.


//      A callback function is a function passed into another function as an argument, 
//      which is then invoked inside the outer function to complete some kind of routine or action.

let arr = [1, 2, 3, 4, 5];
arr.forEach((val, Idx, arr) => {
    console.log(val, Idx, arr);

})