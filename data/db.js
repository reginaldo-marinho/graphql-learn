let id = 1;
function proximoId(){
    return String(id++)
}
const usuarios = [
    {
        id: proximoId(),
        nome: 'Reginaldo',
        idade: 27,
        perfil_id: '2',
        status: "ATIVO"
    },
    {
        id: proximoId(),
        nome: 'Nathalia',
        idade: 30,
        perfil_id: '1',
        status: "INATIVO",
        email:"na@gmail.com"
    },
    {
        id: proximoId(),
        nome: 'Raquel',
        idade: 3,
        perfil_id: '1',
        status: "BLOQUEADO"
    }
]

const perfis = [
    {
        id: '1',
        nome: 'Comum'
    },
    {
        id: '2',
        nome: 'Administrador'
    }
]

export {
    usuarios,
    perfis,
    proximoId
}