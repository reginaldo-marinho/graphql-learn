import { join } from 'node:path'
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from  '@graphql-tools/graphql-file-loader'
import { ApolloServer }from '@apollo/server';
import { startStandaloneServer }  from '@apollo/server/standalone';
import resolvers  from './resolvers/index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const typeDefs  = loadSchemaSync(join(__dirname, './schema/index.graphql'), {
    loaders: [new GraphQLFileLoader()]
})

const server = new ApolloServer({
    typeDefs,
    resolvers
});

let url = await startStandaloneServer(server, {
  listen: { port: 4000 },
})
 
console.log(`🚀  Server ready at: ${url}`)
