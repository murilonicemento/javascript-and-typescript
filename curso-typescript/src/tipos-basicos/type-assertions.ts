// Condicional
const body = document.querySelector("body");
if (body) body.style.backgroundColor = "red";

// Non-null assertion (!)
const body2 = document.querySelector("body")!;
body2.style.backgroundColor = "red";

// Type assertion
const body3 = document.querySelector("body") as HTMLBodyElement;
body3.style.backgroundColor = "red";
