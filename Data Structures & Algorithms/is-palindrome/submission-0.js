class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '')
        const reversed = clean.split('').reverse().join('')

        return clean === reversed
    }
}
