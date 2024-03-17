// the filter method filters out the elements of an array based on the specified condition.
// it iterates the elements and imply the test condition on them then returns a new array of elements that will pass the condition
// an array for integer values
let num =[3,6,7,12,18,23,44,62,81];
// now filter out the even integers using the array filter() method
let even_num = num.filter(function(item){
    return item %2==0;});
    console.log(even_num);
    // other examples
    // 1. an array of people objects and filter out objects with age greater than 18
    let people =[
        {name:'Rachel',age:24},
        {name:'David',age:16},
        {name:'Aakash',age:23},
        {name:'Franklin',age:26},
        {name:'Ricky',age:17},
    ]
    let adults = people.filter(big=>big.age>=18);
    console.log(adults);
    // 2. filtering prime numbers from a given array
    const myArray = [-5,-4,1,3,7,12,13,15,27,21,23,25,27,30];
    function findPrime(item){
        for(let x=2; item>x;x++){
            if(item%x ==0){
                return false;
            }
        }
        return item>1;
    }
    console.log(myArray.filter(findPrime));
    // 3. filtering values within a range 
    function withinRange(item){
        if(typeof item !== 'number'){
            return false;
        }
        return item >= this.minRange && item <=this.maxRange;

    }
    let numbers = [1, 5, 'this',12 ,'is', 23, 29, 35,'simplilearn',50];
    let rangeLimit ={
        minRange:1,
        maxRange:30
    };
    let filteredArray = numbers.filter(withinRange,rangeLimit);
    console.log(filteredArray);
    // 4. filtering string
    let cars = ['Mercedes-Benz', 'Ranger', 'Lamborghini', 'Ferrari', 'Mahindra']

function myFunc(myArray, searchCriteria) {

  return myArray.filter(function(item) {

      return item.toLowerCase().indexOf(searchCriteria.toLowerCase()) !== -1

  })

}

console.log(myFunc(cars, 'i'))