const resolve = dir => require("path").join(__dirname, dir);

module.exports = {
  extensions: [".js", ".vue", ".json"],
  resolve: {
    alias: {
      "@": resolve("../src")
    }
  }
};
