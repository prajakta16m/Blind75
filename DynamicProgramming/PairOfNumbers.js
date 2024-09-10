/*
In a technical interview, you've been given an array of numbers and you need to find a pair of numbers that are equal to the given target value. 
Numbers can be either positive, negative, or both. Can you design an algorithm that works in O(n)—linear time or greater?

let sequence = [8, 10, 2, 9, 7, 5]
let results = pairValues(sum: 11) = //returns (9, 2)
*/

/*
  Solution - Using Set for memoization.
*/
let dp = new Set();
let a = [8,10,2,9,7,5];
let sum = 7;
for(let n of a){
    let diff = sum - n;
    if(dp.has(diff)){
        console.log(diff,n);
        break;
    }else{
        dp.add(n);
    }
    
}

