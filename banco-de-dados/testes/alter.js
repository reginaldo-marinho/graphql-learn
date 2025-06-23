    const db = require('../config/db.js')


    // const usuario = {
    //     nome:  'Reginaldo',
    //     email: 're@zz',
    //     senha: '2222222'
    // }

    // db('usuarios')
    // .insert(usuario)
    // .then(res => console.log(res))


    async function alterarUsuario(){

        var {id} = await db('usuarios')
            .where('id','=',1)
            .select('id')
            .first()
        
        
        await db('usuarios')
        .where({id})
        .update({email: 'reginaldo@gmail.com'})
        
        var user = await db('usuarios')
        .where({id})
        
        console.log(user)
        
        
    }

    alterarUsuario()
    .then(res => {
        
    })
    


    

