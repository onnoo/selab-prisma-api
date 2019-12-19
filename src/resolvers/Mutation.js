function addAnswer(parent, args, context, info) {
  return context.prisma.createAnswer(
    {
      quiz: {
        connect: {
          id: args.quizId
        }
      },
      user: {
        connect: {
          user_id: args.userId
        }
      },
      content: args.content
    }
  )
}

module.exports = {
  addAnswer
}
