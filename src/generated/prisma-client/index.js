"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Course",
    embedded: false
  },
  {
    name: "Semester",
    embedded: false
  },
  {
    name: "QuizType",
    embedded: false
  },
  {
    name: "Permission",
    embedded: false
  },
  {
    name: "QuizContents",
    embedded: false
  },
  {
    name: "Account",
    embedded: false
  },
  {
    name: "Answer",
    embedded: false
  },
  {
    name: "Quiz",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://13.209.46.207:4466/`
});
exports.prisma = new exports.Prisma();
