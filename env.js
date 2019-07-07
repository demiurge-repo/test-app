const env = require("git-env")("dev");
require("env-dep/register");
module.exports = env;
