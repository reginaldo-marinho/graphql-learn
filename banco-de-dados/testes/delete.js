    const db = require('../config/db.js')

    db('usuarios')
    .where('id','=',1)
    .delete()
    .then(res => {
        console.log(res)
    })
        