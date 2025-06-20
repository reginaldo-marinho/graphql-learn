import {proximoId, usuarios} from '../../data/db.js'

function getIndexUsuario(input){
    
    if(input === null) return -1

    if(input.id)
    {
        let index = usuarios.findIndex(u => u.id === input.id)
        return index
    }

    if(input.email)
    {
        let index = usuarios.findIndex(u => u.email === input.email)
        return index
    }
    return -1
}

export default {
    novoUsuario (_, {input}){
        
        const {nome, email, idade} = input

        let usuarioExiste =  usuarios.some(c=> c.email === email)
        
        if(usuarioExiste) throw new Error("Email já cadastrado para outro Usuário");
        
        const novo = {
            id: proximoId(),
            nome,
            email,
            idade,
            perfil_id:1,
            status: "ATIVO"
        }

        usuarios.push(novo)

        return novo
    },
    excluirUsuario(_,{input}){
        
        let  index = getIndexUsuario(input)
        if(index < 0 ) return null

        const excluidos = usuarios.splice(index,1)

        return excluidos ? excluidos[0] : null

    },
    alterarUsuario(_,{filtro, input}){
        
        let  index = getIndexUsuario(filtro)
        if(index < 0 ) return null

        const usuario = {
            ...usuarios[index],
            ...input

        }
        usuarios.splice(index,1,usuario)
        return usuario
    }
}