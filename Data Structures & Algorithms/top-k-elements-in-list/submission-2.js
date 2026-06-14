class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(arrayNums, k) {
        const map = new Map()
        for (const element of arrayNums) {
            if(map.has(element)) map.set(element, map.get(element) + 1)
                else map.set(element, 1)
        }

        const sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1])
        const result = sorted.slice(0, k).map(item => item[0])


        return result
    }
}
