const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const alunos = require("./seed/alunos.json");
const professores = require("./seed/professores.json");
const turmas = require("./seed/turmas.json");
const disciplinas = require("./seed/disciplinas.json");
const matriculas = require("./seed/matriculas.json");

async function main() {
    for (const aluno of alunos) {
        await prisma.aluno.create({
            data: aluno
        });
    }
    for (const professor of professores) {
        await prisma.professor.create({
            data: professor
        });
    }
    for (const turma of turmas) {
        await prisma.turma.create({
            data: turma
        });
    }
    for (const disciplina of disciplinas) {
        await prisma.disciplina.create({
            data: disciplina
        });
    }
    for (const matricula of matriculas) {
        await prisma.matricula.create({
            data: matricula
        });
    }    
}

main()
    .then(async () => {
        await prisma.$disconnect()
        console.log('Semeadura concluída com sucesso!');
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    });