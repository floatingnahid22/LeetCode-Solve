/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = s.split(" ");
    let res = "";
    for(let i=str.length-1; i>=0; i--){
        if(str[i]){
            res += (res ? " " : "") + str[i];
        }
    }
    return res;
};