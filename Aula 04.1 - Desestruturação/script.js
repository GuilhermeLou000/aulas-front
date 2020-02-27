"use strict";

const alunoA = ['Ana Clara' , '5','8','9'];

const [nomeA='', n1=0, n2=0, n3=0, turmaA=''] = alunoA;

// console.log(nota3);

//Destruturação de objetos

const aluno = {
    nome:"Ana Clara", 
    nota1:'5', 
    nota2:'8',
    nota3:'10',
    turma:'DS2M'
};


const {nome,nota1,nota2,nota3,turma} = aluno;

console.log(aluno);

const [cliente, ...valores] = alunoA;
console.log(valores);

const maior = Math.max(...valores);
console.log(maior);

const soma = (...numeros) => numeros.reduce ( ( acc,num ) => acc + num );

console.log(soma (100,55,123,4532,343,43));



