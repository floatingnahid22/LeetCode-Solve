/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cacheKey = {};
    return function(...args) {
        const key = JSON.stringify(args);

        if(key in cacheKey){
            return cacheKey[key];
        }

        const result = fn(...args);
        cacheKey[key] = result;
        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */