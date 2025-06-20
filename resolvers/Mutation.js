import {proximoId, usuarios} from '../data/db.js'

function getIndexUsuario(id){
        let index = usuarios.findIndex(u => u.id === id)
        return index
}

export default {
    novoUsuario (_, {nome, email, idade}){
        let usuarioExiste =  usuarios
        .some(c=> c.email === email)
        
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
    excluirUsuario(_,{id}){
        
        let  index = getIndexUsuario(id)
        if(index < 0 ) return null

        const excluidos = usuarios.splice(index,1)

        return excluidos ? excluidos[0] : null

    },
    alterarUsuario(_,args){
        
        let  index = getIndexUsuario(args.id)
        if(index < 0 ) return null

        const usuario = {
            ...usuarios[index],
            ...args

        }
        usuarios.splice(index,1,usuario)
        return usuario
    }
}