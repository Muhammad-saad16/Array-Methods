//                                                                JavaScript Array Method


let numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// Array.at  ---- .at() method is a built-in JavaScript method that allows you to access elements in an array using a relative index.
// It can take both positive and negative integers as arguments, which makes it more flexible compared to traditional array indexing.

console.log(numbers.at(5)); // 6 --- as positve index
console.log(numbers.at(-5)); // 6 --- as negative index


//pop()  ----    .pop() method removes the last element from an array and returns that element. This method changes the length of the array.
numbers.pop();
console.log(numbers); // 10 --- as pop() removes the last element 10 from the array


//push()  ----    .push() method adds one or more elements to the end of an array and returns the new length of the array.
numbers.push(11);
console.log(numbers); // 11 --- as push() adds 11 to the end of the array


// fill() ----     .fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length).
console.log(numbers.fill(10));



// join()  ----    .join() method is used to join all elements of an array into a string.
console.log(numbers.join(", "));


// shift()  ----    .shift() method removes the first element from an array and returns that removed element.
numbers.shift();
console.log(numbers);


//reverse() ----   .reverse() method reverses the order of the elements in an array.
numbers.reverse();
console.log(numbers);


//unshift() ----  .unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
numbers.unshift(0);
console.log(numbers);


//includes() ----  .includes() method determines whether an array includes a certain element, returning true or false as appropriate.
console.log(numbers.includes(10)); // true
console.log(numbers.includes(12)); // false


//map()  ----    .map() method creates a new array with the results of calling a provided function on every element in the calling array.
let doubled = numbers.map((num) => num * 2);
console.log(doubled);



//tostring()  ----    .toString() method returns a string representing the specified array and its elements.
console.log(numbers.toString());


//findindex()  ----    .findIndex() method returns the index of the first element in an array that satisfies the provided testing function.
let index = numbers.findIndex((num) => num > 5);
console.log(index); // 5



//indexof()  ----    .indexOf() method returns the index of the first occurrence of a specified element in an array.
let index2 = numbers.indexOf(5);
console.log(index2); // 4


//slice()  ----    .slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
let sliced = numbers.slice(0, 5);
console.log(sliced);



//splice()  ----    .splice() method changes the contents of an array by removing existing elements and/or adding new elements.
numbers.splice(0, 1, 0);
console.log(numbers);


//concat()  ----    .concat() method creates a new array by merging (concatenating) existing arrays. adding value in array by using concat() like push() method.
let newNumbers1 = numbers.concat([11, 12, 13, 14, 15]);
console.log(newNumbers1);    



//falt()  ----    .falt() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let number = [1, 2, [3, 4, [5, 6]]];
let newNumbers = number.flat(Infinity); //infinity is used to specify the depth of the array
console.log(newNumbers);



//Array.of()  ----    .of() method creates a new, shallow-copied Array instance from an array-like or iterable object.
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));



//valueof()  ----    .valueOf() method returns the primitive value of the specified object.

console.log(numbers.valueOf()); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10


//forEach()  ----    .forEach() method executes a provided function once for each array element.
console.log(numbers.forEach((num) => console.log(num)));


//filter()  ----    .filter() method creates a new array with all elements that pass the test implemented by the provided function.
let filtered = numbers.filter((num) => num > 5);
console.log(filtered);