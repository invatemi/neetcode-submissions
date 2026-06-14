class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b)
        const result = []

        for(let index = 0; index < nums.length; index++){
            if(nums[index] > 0) break

            if(index > 0 && nums[index] === nums[index - 1]) continue

            let left = index + 1
            let rigth = nums.length - 1


            while(left < rigth){
                const currentSum = nums[index] + nums[left] + nums[rigth]

                if(currentSum < 0) left++
                else if(currentSum > 0) rigth--
                else {
                    result.push([nums[index], nums[left], nums[rigth]])
                    while(left < rigth && nums[left] === nums[left + 1]){
                        left++
                    }

                    while(left < rigth && nums[rigth] === nums[rigth - 1]){
                        rigth--
                    }

                    left++
                    rigth--
                }
            }
        }

        return result
    }
}