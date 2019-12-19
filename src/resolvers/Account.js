function permission(parent, args, context, info) {
  return context.prisma.account({id: parent.id}).permission()
}

module.exports = {
  permission
}