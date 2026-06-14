class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map()
        if(typeof(s) !== "string" || typeof(t)!== "string") throw Error("Аргументы должны быть строками")
        if(s.length !== t.length) return false

        for(const element of s){
            if(map.has(element)) map.set(element, map.get(element) + 1)
                else map.set(element, 1)
        }
        
        for(const element of t){
            if(!map.has(element)) return false
            map.set(element, map.get(element) - 1)
            if(map.get(element) < 0) return false
        }

        return true
    }
}
