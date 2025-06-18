import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const usuarios = [
    {
        id: '1',
        nome: 'Reginaldo',
        idade: 27,
        perfil_id: '2'
    },
    {
        id: '2',
        nome: 'Nathalia',
        idade: 30,
        perfil_id: '1'
    },
    {
        id: '3',
        nome: 'Raquel',
        idade: 3,
        perfil_id: '1'
    }
]

const perfis = [
    {
        id: '1',
        nome: 'Comum'
    },
    {
        id: '2',
        nome: 'Administrador'
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
        perfil_id: ID!
        perfil:Perfil
    }
 
    type Produto {
        nome: String!
        preco: Float!
        desconto: Int
        precoComDesconto:Float
    }

     type Perfil {
        id: ID!
        nome:String!
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
        perfis:[Perfil!]!
        perfil(id: ID): Perfil
    }
`;

const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        },
        toString(usuario) {
            return 'Esse campo é tratado pelo resolver, mas não é proveniente do usuário propriamente dito'
        },
        perfil(usuario){
            return perfis.find(c=> c.id === usuario.perfil_id)
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
        },
        perfis() {
            return perfis
        },
        perfil(_, {id}) {
            return perfis.find(c=> c.id === id)
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