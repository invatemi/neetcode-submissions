class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const set = new Set()

        for(let r = 0; r < 9; r++){
            for(let c = 0; c < 9; c++){
                const num = board[r][c]

                if(num === '.') continue

                const col = `col-${c}-${num}`
                const row = `row-${r}-${num}`
                const box = `box-${Math.floor(r / 3)}-${Math.floor(c / 3)}-${num}`

                if(set.has(col) || set.has(row) || set.has(box)) return false

                set.add(col)
                set.add(row)
                set.add(box)
            }
        }

        return true
    }
}
