function courses(parent, args, context, info) {
  return context.prisma.courses({ where: {degree: args.degree, semesters_some: {semester: args.semester}} })
}

function semesters(parent, args, context, info) {
  return context.prisma.semesters({orderBy: "semester_DESC"})
}

function quizzes(parent, args, context, info) {
  return context.prisma.quizzes({orderBy: "createdAt_DESC"})
}

function quiz(parent, args, context, info) {
  return context.prisma.quiz({ id: args.id })
}

module.exports = {
  courses,
  semesters,
  quizzes,
  quiz
}
