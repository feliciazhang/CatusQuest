const path = require(`path`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: `/game/:id`,
    matchPath: `/game/:id`,
    component: path.resolve(`./src/pages/scene.js`),
  })
}