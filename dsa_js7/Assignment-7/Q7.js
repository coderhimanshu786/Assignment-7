


// function to compare the two strings
function removeBackspaces(s, t)
{
	let n = s.length;

	// To point at position after considering the backspaces
	let idx = 0;
//traverse over the two string until n value
	for (let i = 0; i < n; i++) {
		if (s[i] != '#') {
			s[idx] = s[i];
			idx++;
		}
		else if (s[i] == '#' && idx >= 0) {
			idx--;
		}
		// This idx can never point at negative index position
		if (idx < 0)
			idx = 0;
	}
	return s.substring(0, idx);
}

// Question 
/* Javascript implementation to Check if two strings after processing backspace character are equal or not*/
let s = "ab#c";
let t = "ad#c";

if (removeBackspaces(s) == removeBackspaces(t))
	console.log("True");
else
	console.log("False");
