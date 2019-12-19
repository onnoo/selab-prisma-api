function semesters(parent, args, context, info) {
  return context.prisma.course({ code: parent.code }).semesters({orderBy: "semester_DESC"})
}

module.exports = {
  semesters,
}