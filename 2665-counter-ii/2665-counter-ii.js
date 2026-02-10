/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let currentCount = init;
    return {
        increment: function () {
            return currentCount+=1;
        },
        reset: function () {
            return currentCount = init;
        },
        decrement: function () {
            return currentCount-=1;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */