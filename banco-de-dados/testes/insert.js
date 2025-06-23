    const db = require('../config/db.js')

    // const novoCadastrador =  {
    //     nome: 'cadastrador',
    //     rotulo: 'Cadastrador'
    // }

    // const novovisitante =  {
    //     nome: 'visitante',
    //     rotulo: 'Visitante'
    // }


    // db('perfis')
    // .insert(novoCadastrador)
    // .then(res => console.log(res))
    // .catch(err => console.error(err))
    // .finally(_ => {
        
    // })


    db('perfis')
    .insert(novoCadastrador)
    .then(res => console.log(res))
    .catch(err => console.error(err))
    .finally(_ => {
        
    })



