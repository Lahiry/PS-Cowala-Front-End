function organizaNomes(usuarios) {

  const eu = usuarios
    .filter(usuario => (usuario.souEu === true))
    .map(usuario => (usuario.nome)) 

  const responsaveis = usuarios
    .filter(usuario => (usuario.responsavel === true && usuario.souEu === false))
    .map(usuario => (usuario.nome))
    .sort()

  const naoResponsaveis = usuarios
    .filter(usuario => (usuario.responsavel === false && usuario.souEu === false))
    .map(usuario => (usuario.nome))
    .sort()

  const nomesOrganizados = [...eu, ...responsaveis, ...naoResponsaveis]

  return nomesOrganizados;
}

console.log(organizaNomes([
  {
    souEu: false,
    responsavel: true,
    nome: 'Pedro'
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'João'
  },
  {
    souEu: true,
    responsavel: true,
    nome: 'Lahiry'
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'Vinicius'
  },
  {
    souEu: false,
    responsavel: true,
    nome: 'David'
  },
  {
    souEu: false,
    responsavel: true,
    nome: 'Fernando'
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'Alan'
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'Daniel'
  }
]))