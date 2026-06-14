class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(const element of strs){

            const sorted = element.split('').sort().join('');

            if(!map.has(sorted)) map.set(sorted, [])

            map.get(sorted).push(element)
        }

        return Array.from(map.values());
    }
}
