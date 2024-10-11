// text reducer
export const truncateText=(text, maxLength)=> {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}
// first name extractor 
export function firstWordExtractor(str) {
    // Trim any leading or trailing whitespace
    str = str.trim();
    // Split the string by spaces and return the first word
    const firstWord = str.split(" ")[0];
    return firstWord;
  }