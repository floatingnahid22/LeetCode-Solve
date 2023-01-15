/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     let  str = s.replace(/[^A-Za-z0-9]/g, "");
    
    str = str.toLowerCase();

    return str === str.split("").reverse().join("")
};