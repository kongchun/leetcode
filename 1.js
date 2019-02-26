var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        let cal = (target-nums[i]);
        let pos = nums.lastIndexOf(cal);
        if(pos>-1 && pos!=i){
            return [i,pos];
        }
        
    }
    return null;
};
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));