//complexity
//Time Complexity: O(n)
//Auxiliary Space: O(1)

//function that reverse the words inside the line
function printWords(str) {

	// word variable to store word
	let word;
	// making a string stream
	let lines = str.split("\n");
    //traverse over the hole line in an individual letter 
	for (let i = 0; i < lines.length; i++) {
        //initialize variable words and split the lines
		let words = lines[i].split(" ");
		//then in a line again traverse over line then find words length init
		for (let j = 0; j < words.length; j++) {
           // then words split reverse then join and print reverse words in a line
			word = words[j].split("").reverse().join("");
			console.log(word + " ");
		}
	}
};

//Question a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
let s = "Let's take LeetCode contest";
printWords(s);
