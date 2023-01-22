/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const setNums1 = new Set(nums1);
    const setNums2 = new Set(nums2);
    
    let ans = [];
    
    for(let i of setNums1){
        if(setNums2.has(i)){
            ans.push(i);            
        }
    }
    return ans;
};
