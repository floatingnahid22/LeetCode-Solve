/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let p = 0;
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j] === 1){
                p += 4;
                if(j>0 && grid[i][j-1]){
                    p -= 2;
                }
                if(i>0 && grid[i-1][j]){
                    p -= 2;
                }
            }
        }
    }
    return p;
};