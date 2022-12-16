class Aluno {
    constructor (nome, qtdFaltas, notas){
      this.nome = nome
      this.qtdFaltas = qtdFaltas
      this.notas = notas
    }
    calcularMedia () {
        let nota = 0;

        for (let i = 0; i < (this.notas).length; i++) {
        nota += (this.notas)[i]; 
       }
        return (nota / (this.notas).length).toFixed(1);
    }
    faltas () {
    return this.qtdFaltas += 1;
    }
}

const aluno1 = new Aluno('Selena', 1, [8, 9, 10])
const aluno2 = new Aluno('Márcia', 4, [5, 10, 8])
const aluno3 = new Aluno('Marina', 2, [7, 8, 2])
const aluno4 = new Aluno('Milena', 5, [2, 4, 2])
const alunos = [];

alunos.push(aluno1,aluno2,aluno3,aluno4)

console.log(aluno1)
aluno1.faltas()  //adicionando faltas no aluno1
console.log(aluno1)
console.log(aluno3.calcularMedia()) //calculando média do aluno3

const curso = {
    nomeDoCurso: 'DH',
    notaDeAprovacao: 7,
    faltasMaximas: 5,
    listaEstudantes: alunos// array contendo lista de alunos criada na linha 31 e alunos adicionados na linha 33
}

adicionarAluno(nome, qtdFaltas, notas); {
    let novoAluno = new Aluno(nome, qtdFaltas, notas);
    this.listaEstudantes.push(novoAluno);
}

aprovacao (aluno); {
  let nota = aluno.calcularMedia()
  if (aluno.qtdFaltas == curso.faltasMaximas && nota >= curso.notaDeAprovacao * 1.1); {
    let aprovado = true
    return aprovado
  } else if (aluno.qtdFaltas < curso.faltasMaximas && nota >= curso.notaDeAprovacao) {
    return true
  } return false
  
}

aprovadosReprovados();{
  let situacao = [];
  this.listaEstudantes.forEach((alunos, index) =>{
    situacao[index] = this.aprovacao(alunos);
    return situacao
  });
  return situacao 
}

curso.adicionarAluno('Carla', 1, [4,5,9]);
console.log(curso.aprovacao(aluno1)); // Testando a aprovação 
console.log(curso.listaEstudantes); // Testando a lista de estudantes
console.log(curso.aprovadosReprovados()); //Testando a aprovação de todos os alunos