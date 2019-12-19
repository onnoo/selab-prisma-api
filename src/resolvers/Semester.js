function courses(parent, args, context, info) {
  return context.prisma.semester({ semester: parent.semester }).courses()
}

module.exports = {
  courses,
}