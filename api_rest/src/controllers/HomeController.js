import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Juan',
      sobrenome: 'Cardoso',
      email: 'juan@email.com',
      idade: 29,
      peso: 75,
      altura: 1.77,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
