class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums);
        let longest = 0;

        for(const num of numsSet){
            if(!numsSet.has(num - 1)){
                let currentNum = num;
                let currentStreak = 1;

                while(numsSet.has(currentNum + 1)){
                    currentNum += 1;
                    currentStreak += 1;
                }

                longest = Math.max(longest, currentStreak);
            }
        }
        
        return longest;
    }
}
