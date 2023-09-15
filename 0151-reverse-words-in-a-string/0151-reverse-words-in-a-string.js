/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = s.split(" ");
    let res = "";
    for(let i=str.length-1; i>=0; i--){
        if(str[i]){
            if(res){
                res = res + " " + str[i];
            } else {
                res = res + "" + str[i];
            }
        }
    }
    return res;
};