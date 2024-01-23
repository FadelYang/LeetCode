/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let arrayLeft = 0
    let arrayRight = 0
    let result = -1
    
    for (let i = 0; i < nums.length; i++) {
        for (j = i+1; j < nums.length; j++) {
            arrayRight = arrayRight + nums[j]
        }
        for (k = 0; k < i; k++) {
            arrayLeft = arrayLeft + nums[k]
        }
        
        if (arrayLeft == arrayRight) {
            return i
        }
        
        console.log({arrayLeft})
        console.log({arrayRight})
        
        arrayLeft = 0;
        arrayRight = 0;
    }
    
    return result
}
