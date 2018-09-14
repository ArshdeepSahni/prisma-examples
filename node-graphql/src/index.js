const { GraphQLServer } = require('graphql-yoga')
const { resolvers } = require('./resolvers')
const { prisma } = require('./prisma-client')

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    db: prisma,
  },
})

server.start(() => console.log('Server is running on localhost:4000'))
