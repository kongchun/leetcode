/**
 * @param {string} 
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var maxLen = 0; 
    var tempLongStr = ""; 
    for(let i in s){
      var char = s[i];
      var index = tempLongStr.indexOf(char);
      if(index == -1) {
        tempLongStr += char;
        maxLen = Math.max(maxLen,tempLongStr.length);
      } else {
        tempLongStr = tempLongStr.substr(index + 1) + char;
      }
    }
    return maxLen; 
};
console.log(lengthOfLongestSubstring("abccdef"))
console.log(lengthOfLongestSubstring("abcb"))



