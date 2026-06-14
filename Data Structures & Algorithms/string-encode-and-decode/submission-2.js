class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(!strs || strs.length === 0) return ''
        const result = []

        for(let element of strs) {
            result.push(element.length + '#' + element)
        }

        return result.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let i = 0

        while(i < str.length) {
            let j = i
            
            while (j < str.length && str[j] !== '#'){
                j++
            }

            let lenghtArray = parseInt(str.substring(i, j))
            let start = j + 1
            let end = start + lenghtArray

            result.push(str.substring(start, end))

            i = end
        }

        return result
    }
}
