

var rotateString = function(s, goal) {
    let str = s.repeat(2);
    return s.length == goal.length ? str.includes(goal) : false;
};
console.log(rotateString("abcde", "cdeab"));
