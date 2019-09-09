import { GraphQLServer } from 'graphql-yoga'

// Resolvers
const resolvers = {
  Query: {
    hello() {
      return 'This is my first query!'
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})
server.start(() => {
  console.log('The server is up!')
})