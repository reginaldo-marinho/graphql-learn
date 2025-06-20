import {usuarios, perfis} from '../data/db.js'

export default {
    ola() {
        return 'reginaldo'
    },
    horaAtual () {
        return new Date 
    },
    usuarioLogado (){
        return {
            id:1,
            nome:'Reginaldo',
            email:'re',
            idade: 23,
            salario_real: 3233.88,
            vip:true
        }
    },
    produto (){
        return  {
            nome: "SSD",
            preco: 350.55,
            desconto: 10
        }
    },
    numerosMegaSena: () => Array(10).fill(0).map(() => parseInt(Math.random() * 60 + 1)).sort(),
    usuarios() {
        console.log(usuarios)
        return usuarios
    },
    usuario(_, args){
        const {id} = args
        return usuarios.find(c=> c.id === id)
    },
    perfis() {
        return perfis
    },
    perfil(_, {id}) {
        console.log(id)
        return perfis.find(c=> c.id === id)
    }
}