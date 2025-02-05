// Change text color based on input
document.getElementById("colorchange").addEventListener("click", function() {
    var color = document.getElementById("colorbox").value;
    document.getElementById("text-container").style.color = color;
});

// Change font size based on slider value
document.getElementById("fontsize").addEventListener("input", function() {
    var size = document.getElementById("fontsize").value;
    document.getElementById("text-container").style.fontSize = size + "px";
});

// Toggle Italic style
document.getElementById("italic").addEventListener("click", function() {
    var textContainer = document.getElementById("text-container");
    if (textContainer.style.fontStyle === "italic") {
        textContainer.style.fontStyle = "normal";
    } else {
        textContainer.style.fontStyle = "italic";
    }
});

// Toggle Underline style
document.getElementById("underline").addEventListener("click", function() {
    var textContainer = document.getElementById("text-container");
    if (textContainer.style.textDecoration === "underline") {
        textContainer.style.textDecoration = "none";
    } else {
        textContainer.style.textDecoration = "underline";
    }
});

// Toggle Bold style
document.getElementById("bold").addEventListener("click", function() {
    var textContainer = document.getElementById("text-container");
    if (textContainer.style.fontWeight === "bold") {
        textContainer.style.fontWeight = "normal";
    } else {
        textContainer.style.fontWeight = "bold";
    }
});

// Change font family based on dropdown selection
document.getElementById("list").addEventListener("change", function() {
    var font = document.getElementById("list").value;
    document.getElementById("text-container").style.fontFamily = font;
});

// Display CSS properties in the specified format
document.getElementById("getstyle").addEventListener("click", function() {
    var textContainer = document.getElementById("text-container");
    var cssProps = `
        color: ${textContainer.style.color};
        font-size: ${textContainer.style.fontSize};
        font-family: ${textContainer.style.fontFamily};
        text-decoration: ${textContainer.style.textDecoration};
        font-style: ${textContainer.style.fontStyle};
        font-weight: ${textContainer.style.fontWeight};
    `;
    document.getElementById("css-props").textContent = cssProps;
});
