class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    // prices = [10,1,5,6,7,1]
    maxProfit(prices) {
        let maxPrice = 0
        let thisPrice = 0

        for(let i = 0; i < prices.length; i++){
            for(let j = i + 1; j < prices.length; j++){
                thisPrice = prices[j] - prices[i]
                if(thisPrice > maxPrice) maxPrice = thisPrice
            }
        }

        return maxPrice
    }
}
