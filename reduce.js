// applications of reduce() method
// 1.summing all values 
let num = [5,9,12,24,67]
let sum = num.reduce(function(accumulator, curValue){
    return accumulator + curValue
},0)
console.log (sum);
// similarly using arrows the following is the code
let num1 =[5,9,24,68]
let sum1 =num1.reduce((accumulator, curValue) => accumulator + curValue, 0)
console.log(sum1)
// 2. summing values in an object array
let initialValue = 0
let obj = [{n:5},{n:9},{n:13},{n:25},{n:49}]
let sum2 = obj.reduce(function(accumulator,curValue){
    return accumulator +curValue.n
},initialValue)
console.log(sum2);
// 3. Flattening an array of Arrays 
let mulArray = [[3,5],[1,7],[12,9]]
let newArray = mulArray.reduce(function(accumulator, curValue){
    return accumulator.concat(curValue)
},[])
console.log(newArray);
// 4. Counting instances in an Object 
let myCars = ['Mercedes-Benz', 'Jeep', 'Ferrari', 'Lamborghini', 'Mercedes-Benz', 'BMW', 'Ferrari']
let instances = myCars.reduce(function(allCars,cars){
    if(cars in allCars){
        allCars[cars]++
    }
    else{
        allCars[cars] = 1
    }
    return allCars
},{})
console.log(instances)
// 5. grouping objects
let student = [

    { name: 'David', age: 23, hobby: 'fishing' },
  
    { name: 'Rachel', age: 25, hobby: 'cooking' },
  
    { name: 'Rahul', age: 22, hobby: 'fishing' }
  
  ];
  function myFunc(obj,prop){
    return obj.reduce(function(acc,item){
        let key = item[prop]
        if(!acc[key]){
            acc[key]=[]
        }
        acc[key].push(item)
            return acc
    },{})
  }
  let groupedStudent = myFunc(student,'hobby')
  console.log(groupedStudent)
//   6. removing duplicates
let array = [2,5,7,5,12,9,7,5,4,3,5,2,4,15]
let newArrays= array.reduce(function(accumulator, curValue){
    if(accumulator.indexOf(curValue) ===-1){
        accumulator.push(curValue)
    }
    return accumulator
},[])
console.log(newArrays);