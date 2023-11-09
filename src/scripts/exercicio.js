class Aluno {
    constructor(nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}

const marcelo = new Aluno("Marcelo", 8.0);
const joao = new Aluno("João", 3.0);
const maria = new Aluno("Maria", 5.0);
const beatriz = new Aluno("Beatriz", 10.0);

const alunos = [marcelo, joao, maria, beatriz];

function alunosAprovados(listaDeAlunos) {
    return listaDeAlunos.filter(aluno => aluno.nota >= 6.0);
}

const aprovados = alunosAprovados(alunos);

console.log(aprovados);