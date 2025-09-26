"use strict";
const immocTestRy = require("immoc-test-ry");

module.exports = core;

function core() {
  return "Hello from core";
}

console.log(immocTestRy, core, "immocTestRy");
