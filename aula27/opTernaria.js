// operação ternária 'Condição' ? 'true' : 'falsy'

const pontosUsuario = 999;
const nivelUsuario = pontosUsuario >= 1000 ? 'Usuario VIP' : 'Usuário Standard';


const corUsuario = null;
const corStandard = corUsuario || 'black';


console.log(nivelUsuario, corStandard);