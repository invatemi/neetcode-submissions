class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()

        for(const element of strs){
            const sortedKey = element.split('').sort().join('');
            if(!map.has(sortedKey)) map.set(sortedKey, []);
            map.get(sortedKey).push(element);
        }

        return Array.from(map.values());
    }
}
