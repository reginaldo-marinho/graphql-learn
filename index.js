import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const usuarios = [
    {
        id: '1',
        nome: 'Reginaldo',
        idade: 27
    },
    {
        id: '2',
        nome: 'Nathalia',
        idade: 30
    },
    {
        id: '3',
        nome: 'Raquel',
        idade: 3
    }
]

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
    
    type Produto {
        nome: String!
        preco: Float!
        desconto: Int
        precoComDesconto:Float
    }

    #Pontos de Entrada
    type Query {
        ola: String,
        horaAtual:Date
        usuarioLogado: Usuario
        produto: Produto
        numerosMegaSena: [Int!]!
        usuarios:[Usuario!]!
        usuario(id: ID): Usuario
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

    Produto: {
        precoComDesconto (produto) {
            return produto.desconto ? produto.preco - (produto.desconto / 100) * produto.preco : produto.preco
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
            return usuarios
        },
        usuario(_, args){
            const {id} = args
            return usuarios.find(c=> c.id === id)
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