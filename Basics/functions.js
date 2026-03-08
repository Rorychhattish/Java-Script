// // console.log("R");
// // console.log("o");
// // console.log("r");
// // console.log("y");

// // function sayMyName(){
// //     console.log("R");
// //     console.log("o");
// //     console.log("r");
// //     console.log("y");
// // }

// // sayMyName()

// // function addTwoNumbers(num1,num2){
// //     console.log(num1 + num2);
// // }
// // // addTwoNumbers(8,"r")
// // addTwoNumbers(4,2)

// function addTwoNumbers(num1,num2){
//     //let result = num1 + num2
//     //console.log("Rory") // return vanda pahila ko sabai execute hunxa
//     //return result
//    console.log("Rory") // yo execute hudaina kinki return paxi ko console execute hudain
//     return num1 + num2// yo arko method ho
// }

// const result = addTwoNumbers(4,4)
// //console.log("Result:", result);

// //function loginUserMessage(username){
// function loginUserMessage(username = "Ram"){    //yadi kehi xain vane ram linxa ra xa vane override garxa 
//    //if(username === undefined){    //yo ani tala ko duitai same xa kunai pni lekhna sakinxa
//    if(!username){
//    console.log("Please enter a username");
//         return  //yo chahi tala ko ma najaos yadi true xa vane ko lagi ho
//     }
//     return `${username} just logged in`
// }
// // loginUserMessage("Rory") //yo chahi show hudaina kinki print ko lagi vanya xain
// console.log(loginUserMessage()) //kehi xain tyahi vaer undefined xa
// //console.log(loginUserMessage(""))   //kehi ni print hudaina yahabatw kinw ki khali xa
// console.log(loginUserMessage("Rory"))   //yale sab print garxa





// //function calculateCartPrice(...num){    //... yale array farkauxa\
// function calculateCartPrice(val1, val2, ...num){    //yale garda 1st val1 ma ani kramasha basxa
//     return num
// }
// console.log(calculateCartPrice(400, 600 ,377,355))


const user ={
    username: "Rory",
    price: 299
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}
handleObject(user)
// handleObject({
//     username: "Ram",
//     price:399
// })

const myNewArray = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))   //yo duitai batw kunaile garna sakinxa
console.log(returnSecondValue([200,300,400,500]))
