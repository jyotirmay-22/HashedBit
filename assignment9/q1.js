// 1. Demonstrate let, const, and var scope
function scopeExample() {
    var a = "I am var"; // Function-scoped
    let b = "I am let"; // Block-scoped
    const c = "I am const"; // Block-scoped
    
    if (true) {
        var d = "var inside block";
        let e = "let inside block";
        const f = "const inside block";
        console.log(e, f); // Accessible here
    }
    
    console.log(a, b, c, d); // 'e' and 'f' are not accessible here
}
scopeExample();