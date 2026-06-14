class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map()

        for(const element of nums){
            if(map.has(element)) map.set(element, map.get(element) + 1)
                else map.set(element, 1)
        }

        for(const [key, value] of map){
            if(value >= 2) return true
        }

        return false
    }
}
