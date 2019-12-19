function content(parent, args, context, info) {
  return context.prisma.quiz({ id: parent.id }).content()
}

function answers(parent, args, context, info) {
  return context.prisma.quiz({ id: parent.id }).answers({orderBy: "createdAt_DESC"})
}

function course(parent, args, context, info) {
  return context.prisma.quiz({ id: parent.id }).course()
}

function semester(parent, args, context, info) {
  return context.prisma.quiz({ id: parent.id }).semester()
}

function createdBy(parent, args, context, info) {
  return context.prisma.quiz({ id: parent.id }).createdBy()
}

module.exports = {
  content,
  answers,
  course,
  semester,
  createdBy
}