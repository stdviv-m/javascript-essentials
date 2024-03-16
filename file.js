console.log("Hello World")

let mname = 'vivian';
console.log(mname);

 let FirstName= 'Viv', LastName= 'vivy';
 console.log(FirstName ,LastName)
// arrays
let cars = ["Volvo", "BMW", "Prado", "Toyota"];
//accessing items using index in an array
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
// array length property
let len =cars.length;
console.log(len)
// accessing the last index in the array
let last = cars[cars.length-1];
console.log(last);
// looping though an array

cars.forEach((item,index)=>{
    console.log(item,index);
});
// array Methods
let list_Num= [2,4,6,8,10]
    for(let x=0;x<list_Num.length;x++)
    {
        let y=list_Num[x]
        console.log(y.toString(2));
    }
    // the code output of the above code returns the corresponding binary string
    





