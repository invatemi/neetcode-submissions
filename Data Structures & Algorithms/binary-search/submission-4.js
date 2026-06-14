class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let rigth = nums.length - 1
        let mid

        while(left <= rigth){
            mid = Math.floor((left + rigth) / 2)

            if(nums[mid] === target) return mid
            else if(nums[mid] < target) left = mid + 1
            else rigth = mid - 1
        }

        return -1
    }
}
