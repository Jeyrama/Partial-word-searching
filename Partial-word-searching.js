/*
Write a method that will search an array of strings for all 
strings that contain another string, ignoring capitalization. 
Then return an array of the found strings.

The method takes two parameters, 
the query string and the array of strings to search, and returns an array.

If the string isn't contained in any of the strings in the array, 
the method returns an array containing a single string: "Empty".

Examples:
  If the string to search for is "me", and the array to search is 
  ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].
*/


// Solution

function wordSearch(query, seq){
  let reg = new RegExp(query,"i");
  let res = seq.filter(function(val){
    return reg.test(val);
  });
  return (res.length > 0) ? res : ["Empty"];
}

// or

const wordSearch = (query, seq) => {
	let res = [], q = query.toLowerCase();
	for (let item of seq) {
  	let curr = item.toLowerCase();
  	if (curr.indexOf(q) > -1) res.push(item);
  }
  return res.length ? res : ['Empty'];
}