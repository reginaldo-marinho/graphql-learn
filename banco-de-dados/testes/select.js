const db = require('../config/db.js')

db('perfis')
.then(res => console.log(res))



db('perfis')
.where('nome','=','admin')
.then(res => console.log(res))