// Q9: Count the number of words in a paragraph
function wordCount(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}
let paragraph = "This is a sample paragraph to test the word count function.";
console.log(wordCount(paragraph));