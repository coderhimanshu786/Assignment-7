
//Time complexity: O(n);
//Space complexity:O(1);

//function for two strings s and t, determine if they are isomorphic.
let isIsomorphic = function(s, t) {
    //initialize empty object
    const mapS = {}, mapT = {};
   // we iterate over the two strings one character at a time.
    for (let i = 0; i < s.length; i++) {
//their values should be !mapS[s[i]] && !mapT[t[i]]. If either of these conditions fails (mapS[s[i]] = t[i], mapT[t[i]] = s[i], else return false.
        if (!mapS[s[i]] && !mapT[t[i]]) {
            mapS[s[i]] = t[i];
            mapT[t[i]] = s[i];
        } else if (mapS[s[i]] !== t[i] || mapT[t[i]] !== s[i]) return false;
    }   
    //Return true once both the strings have been exhausted.
    return true;
};

console.log(isIsomorphic("egg", "add"));