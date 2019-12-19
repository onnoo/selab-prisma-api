function newQuizSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.quiz({ mutation_in: ['CREATED'] }).node()
}

const newQuiz = {
  subscribe: newQuizSubscribe,
  resolve: payload => {
    return payload
  },
}

function newAnswerSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.answer({
    mutation_in: ['CREATED'],
    node: {
      quiz: { id: args.quizId}
    }
  }).node()
}

const newAnswer = {
  subscribe: newAnswerSubscribe,
  resolve: payload => {
    return payload
  },
}

module.exports = {
  newQuiz,
  newAnswer
}