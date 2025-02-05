function toggleVisibility() {
    var paragraph = document.getElementById("useless-paragraph");

    // Check the current display property of the paragraph and toggle visibility
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";  // Show the paragraph
    } else {
        paragraph.style.display = "none";   // Hide the paragraph
    }
}
