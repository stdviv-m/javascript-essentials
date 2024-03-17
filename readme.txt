//variables are used as computer locations where data is stored in the memory
// declaring a variable
/ rules for naming variables
/* should be meaningful
 cannot start with a number
 they are case sensitive
 cannot contain space or hyphen and can be declared on one line and separated by a comma*/
if you need to reassign a variable use let
// primitive types;strings, numbers' boolean, undefined, null, symbol

// javascript is is a dynamic language implying that the values can change in the future


Javascript Arrays
arrays are data types used to store lists of values
arrays can be stored in variables and dealt with in the same way u deal with in any other data types.

creation of arrays
arrays are enclosed within square brackets
accessing arrays
every element in the array is assigned an index which starts with zero by default and retrieved
array length property
accessing the last element in an array
we use the idex property of -1

looping over an array
used when you need to access multiple elements in the loop at once. we use Each method for this

Array Methods
i. tostring() returns string relating to the number.
ii. push() used to push the elements into an existing array. it mutates or changes the array
iii. unshift() adds elements to the front of the array and increases the index of every element by one
property
iv. pop() pops the last element from the array(the last item in the array is not displayed in the output or rather deleted)
v. shift() reduces the index by one as it removes the first element from the array.
vi. slice() cuts the array and returns a shallow copy of a portion of an array into a new array object.the array is sliced from the index specified as begin till the end(end index is excluded). if not specified, the entire array is sliced
vii.concat() this method is used to merge two or more arrays into a single one
viii. sort() sorts the array, by default it sorts the array in an ascending order
ix. reverse() when used after sot it returns the values in descending order.
x. map() creates a new array from the existing one by applying a function to each of the first array
xi. filter() takes each element from an array and applies a conditional statement against it. If the condition is true the element gets pushed to the output array
xii. reduce() reduces an array of values to just one value.it is run on each element of the array to get the single output value

The syntax and Parameter Values of JS Array Filter()
consider the syntax below
array.filter(callbackFn(item,index,array)thisArg)
in the above syntax;
callbackFn:this is a required Parameter that holds the callback function that is supposed to be implemented on each statement.
item: is a required parameter that holds the current element that is being processed
array on which the filter method is being called.
ThisArg: This is an optional parameter that, when passed, will hold the “this” value for each invocation. If the argument is not given, undefined will be used as the default value for this keyword.
Return value: the js array filter method returns a new method with only the elements that have passed the test condition