/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  
nums_sorted = [...nums];
nums_sorted.sort((a,b)=>{return a-b;});

let i=0, j =nums.length-1;
while(j>i){
    if(nums_sorted[i]+nums_sorted[j] == target){
        // Found indexes i and j
        break;
    }else{
        if(nums_sorted[i]+nums_sorted[j] > target){
            j--;
        }else{
            i++;
        }
    }
}

let result = [];
let k = nums.indexOf(nums_sorted[i]);
result.push(k);
nums[k]=-1;
result.push(nums.indexOf(nums_sorted[j]));


 return result;
};
