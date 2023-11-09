const redesSociais = ["Facebook", "Instagram", "Twitter"];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

redesSociais.forEach(function(item, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${item}`);
});

const alunos = ["Gustavo", "Julia", "Paula", "Wagner"];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: "Frontend"
    }
});

console.log(alunos2);

const paula = alunos2.find(function(itemAtual) {
    return itemAtual.nome == "Paula";
});

console.log(paula);

const indiceDaPaula = alunos2.findIndex(function(itemAtual) {
    return itemAtual.nome == "Paula";
});

console.log(indiceDaPaula);

alunos2.push({
    nome: "Lucio",
    curso: "Backend"
});

const todosAlunosSaoDeFrontend = alunos2.every(function(itemAtual) {
    return itemAtual.curso == "Frontend";
});


console.log(todosAlunosSaoDeFrontend);

const existeAlgumAlunoDeBackend = alunos2.some(function(itemAtual) {
    return itemAtual.curso == "Backend" && itemAtual.curso == "Frontend";
});

console.log(existeAlgumAlunoDeBackend);

function filtraAlunosDeBackend(aluno) {
    return aluno.curso == "Backend";
}

const filtraAlunosDeBackend2 = aluno => aluno.curso == "Backend";

const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);

console.log(alunosDeBackend);

const nums = [10, 20, 30, 10];

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0);

console.log(soma);

let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}

console.log(somaComFor);

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, "");

console.log(nomesDosAlunos);

