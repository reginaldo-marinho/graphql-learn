
const { connection } =  require('./.env')

module.exports =  {    
    client: 'pg',
    connection: connection,
    pool: { 
        min: 2, max: 7 
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};
