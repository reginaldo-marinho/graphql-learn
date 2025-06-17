import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `
    scalar Date

    type Usuario {
        id: ID!
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean,
        toString: String
    }
    #Pontos de Entrada
    type Query {
        ola: String,
        horaAtual:Date
        usuarioLogado: Usuario
    }
`;

const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        },
        toString(usuario) {
            return 'Esse campo é tratado pelo resolver, mas não é proveniente do usuário propriamente dito'
        }
    },
    Query: {
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
        }
    }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);