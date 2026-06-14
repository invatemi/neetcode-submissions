class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const result = []
        for(let i = 0; i < numbers.length; i++){
            for(let j = i + 1; j < numbers.length; j++){
                if(numbers[i] + numbers[j] === target) result.push(i + 1, j + 1)
            }
        }

        return result
    }
}
