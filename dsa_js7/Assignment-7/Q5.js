//Complexity
//Time Complexity: O(N)O(N)O(N), where NNN is the size of s. We build a helper array, plus reverse about half the characters in s.
//Space Complexity: O(N)O(N)O(N), the size of a

//According to the question
function reverseStr(s, k){
    //split of a given string
    const sArr = s.split('');
    //then traverse over an string and find length and here 1st teo letter interchange then after two letter then two letter interchange ie 2xK
    for (let i = 0; i < sArr.length - 1; i += 2 * k) {
        //then again traverse string with increment of x and decrement of j
        for (let j = i + k - 1, x = i; j >= i; j--, x++) {
            sArr[x] = s[j];
        }
    }
//After 2 charcter interchange then join all letter of string
    return sArr.join('');
};

console.log(reverseStr("abcdefg", 2));