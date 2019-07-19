/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if (numRows < 2) {
        return s;
    } else {
        let currentRow = 0;
        let downward = true;
        let fristRow = 0;
        let lastRow = numRows - 1;
        let rows = [];
        for (let i = 0; i < numRows; i++) {
            rows.push([]);
        }
        for (let j = 0; j < s.length; j++) {
            let ch = s[j];
            rows[currentRow].push(ch);
            if (downward) {
                if (currentRow + 1 > lastRow) {
                    downward = false;
                    currentRow--;
                } else {
                    currentRow++;
                }
            } else if (!downward) {
                if (currentRow - 1 < fristRow) {
                    downward = true;
                    currentRow++;
                } else {
                    currentRow--;
                }
            }
        }
        return rows.reduce((a, b) => a + b.join(''),'');
    }

};