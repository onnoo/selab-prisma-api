function type(parent, args, context, info) {
  return context.prisma.quizContents({ id: parent.id }).type()
}

module.exports = {
  type
}

