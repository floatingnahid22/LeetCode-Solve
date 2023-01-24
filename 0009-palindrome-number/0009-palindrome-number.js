/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let temp, remainder, reversedNum = 0;
    temp = x;
    while(x>0){
        remainder = x%10;
        x = parseInt(x/10);
        reversedNum = reversedNum*10+remainder;
    }
    if(reversedNum == temp){
        return true;
    } else{
        return false;
    }
    
};