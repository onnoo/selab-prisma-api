function addAnswer(parent, args, context, info) {
  return context.prisma.createAnswer(
    {
      quiz: {
        connect: {
          id: args.quizId
        }
      },
      user: args.userId,
      content: args.content
    }
  )
}

function addQuiz(parent, args, context, info) {
  return context.prisma.createQuiz(
    {
      title: args.title,
      description: args.description,
      content: {
        create: {
          type: args.type,
          options: {set: args.options}
        }
      },
      createdBy: args.userId,
      course: {
        connect: {
          code: "CSE326"
        }
      },
      semester: {
        connect: {
          semester: "2019-2"
        }
      }
    }
  )
}

module.exports = {
  addAnswer,
  addQuiz
}
