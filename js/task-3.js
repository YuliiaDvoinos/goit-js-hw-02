const findLongestWord = function(string) {
    const wordsArray = string.split(' ');
    
    let biggestWord = wordsArray[0];

    for (const word of wordsArray) {

        const wordLength = word.length;

        const biggesttWordLength = biggestWord.length;

        if (wordLength > biggesttWordLength) {
             biggestWord = word;
             
        }  
        
    };
    return biggestWord; 
   
};


console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'