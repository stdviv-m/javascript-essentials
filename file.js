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
    cars.push('Audi');
    console.log(cars);
    // here Audi is pushed at the end of the array
    cars.unshift("Volks");
    console.log(cars);
    // volks is added to the array and it appears at the 0 index at it shifts the rest of the items to the right
    cars.pop()
    console.log(cars);
    // the last item is removed from the array when using pop()
    cars.shift()
    console.log(cars);
    // the first item is removed from the array and the index is reduced by 1
    let Cars = ['Toyota', 'BMW', 'volvo','honda','Audi'];
    let Cars2 = Cars.slice(1)
    console.log(Cars2);
    let Cars3 = Cars.slice(3)
    console.log(Cars3);
    let Cars4 = Cars.slice(0,4)
    console.log(Cars4);
    // concatenating arrays
    let car = ['Toyota', 'BMW', 'volvo','honda','Audi'];
    let bikes = ['yamaha', 'suzuki','royal enfield'];
    let vehicles = car.concat(bikes);
    console.log(vehicles)
     let numbers = [3,2,1,6,5,4,7,8];
     numbers.sort();
     console.log(numbers);
     numbers.reverse();
     console.log(numbers);
     let num1 = numbers.map(double); //map() ensures that double is applied to each element in the array thus multiplying the elements by two
     function double(value){
        return value*2
     }
     console.log(num1);

     let num2 = num1.filter(comp);
     function comp(value){
        return value>4;
     }
     console.log(num2);
     let num3 = num2.reduce(sum);
     function sum(total,value){
        return total+value;
     }
     console.log(num3);
    
     





