function firstNonRepeatedChar(str) {
 const charfreqcount={};

	for(let char of str){
		
		if(charfreqcount[char]){
			charfreqcount[char]++
		}
		else{
			charfreqcount[char]=1
		}
		
	}
	for(let char of str){
		if(charfreqcount[char] === 1){
			return char;
		}

	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
