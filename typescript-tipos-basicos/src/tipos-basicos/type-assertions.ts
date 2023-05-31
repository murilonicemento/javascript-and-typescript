// Condicional (RECOMENDADO)
const body = document.querySelector("body");
if (body) body.style.backgroundColor = "red";

// Type assertion (RECOMENDADO)
const body2 = document.querySelector("body") as HTMLBodyElement;
body2.style.backgroundColor = "red";
// Non-null assertion (NÃO RECOMENDADO)
const body3 = document.querySelector("body")!;
body3.style.backgroundColor = "red";

// Type assertion (NÃO RECOMENDADO)
const body4 = document.querySelector("body") as unknown as number;
// body4.style.backgroundColor = "red";
