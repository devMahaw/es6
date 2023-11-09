// ------------------------------------------------------------------------------------

// map

let meuMap = new Map();

meuMap.set("nome", "Mahaw");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("nome"));

// meuMap.clear();
// console.log(meuMap.size);

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap);

// ------------------------------------------------------------------------------------

// set

const cpfs = new Set();

cpfs.add("31630767000");
cpfs.add("10399675078");
cpfs.add("26747475011");

console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach(valor => {
    console.log(valor);
})

const array = ["Mahaw Dantas", "José Paulo", "Maria Isabel", "Luana Fonseca", "Luana Fonseca", "Mahaw Dantas"];

const arrayComoSet = new Set([...array]);

const arraySemItensDuplicados = [...arrayComoSet];

console.log(arrayComoSet);

console.log(arraySemItensDuplicados);


