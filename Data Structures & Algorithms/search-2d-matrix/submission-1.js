class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if(!matrix.length || !matrix[0].length) return false

        let lineLength = matrix.length
        let rowLength = matrix[0].length

        let left = 0
        let rigth = lineLength * rowLength - 1

        while(left <= rigth){
            let mid = Math.floor((left + rigth) / 2)

            let line = Math.floor(mid / rowLength)
            let row = mid % rowLength

            if(matrix[line][row] === target) return true
            else if(matrix[line][row] < target) left = mid + 1
            else rigth = mid - 1
        }

        return false
    }
}
