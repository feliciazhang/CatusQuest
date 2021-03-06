const path = require(`path`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: `/game/:id`,
    matchPath: `/game/:id`,
    component: path.resolve(`./src/pages/scene.js`),
  })
}
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}