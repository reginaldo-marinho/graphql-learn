import {perfis} from '../data/db.js'

export default {
    
    salario(usuario) {
        return usuario.salario_real
    },
    toString() {
        return 'Esse campo é tratado pelo resolver, mas não é proveniente do usuário propriamente dito'
    },
    perfil(usuario){
        return perfis.find(c=> c.id === usuario.perfil_id)
    }
}