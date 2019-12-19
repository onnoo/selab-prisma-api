function user(parent, args, context, info) {
  return context.prisma.answer({id: parent.id}).user()
}

function quiz(parent, args, context, info) {
  return context.prisma.answer({id: parent.id}).quiz()
}

module.exports = {
  user,
  quiz
}