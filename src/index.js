const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Course = require('./resolvers/Course')
const Semester = require('./resolvers/Semester')
const QuizContents = require('./resolvers/QuizContents')
const Answer = require('./resolvers/Answer')
const Account = require('./resolvers/Account')
const Quiz = require('./resolvers/Quiz')
const Subscription = require('./resolvers/Subscription')

const resolvers = {
  Query,
  Mutation,
  Subscription,
  Course,
  Account,
  QuizContents,
  Answer,
  Semester,
  Quiz
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma },
})

const options = {
  port: 4000
}

server.start(options, ({ port }) => console.log(`http://localhost:4000 에서 서버 가동중`))
