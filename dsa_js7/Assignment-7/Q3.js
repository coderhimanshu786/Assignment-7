

let addStrings = function (num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let sum = [];
    let carry = 0;
    while (i >= 0 || j >= 0 || carry) {
        //initialize n1 and n2 gives or given 0
        let n1 = num1[i] || 0;
        let n2 = num2[j] || 0;
//initialize n1 and n2 and carry(from 0)
        let curSum = parseInt(n1) + parseInt(n2) + carry;
        //gives  remainder
        let reminder = curSum % 10;
        //push in the empty array after remainder finds
        sum.push(reminder);
        //initialize carry if curSum is greater then 10 otherwise 1 or 0 then decrement j and i
        carry = curSum >= 10 ? 1 : 0;
        j--;
        i--;
    }
//print sum after reverse then join it the integer
    return sum.reverse().join("");
};



console.log(addStrings("11", "123"));