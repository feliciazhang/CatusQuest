const path = require(`path`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  createPage({
    // path: `/quest/scene`,
    // component: path.resolve(`./src/pages/scene.js`),
    // context: {
    //   id: `scene`, //use this context parameter to do the dynamic stuff in your page
    // },

    path: `/quest/:id`,
    matchPath: `/quest/:id`,
    component: path.resolve(`./src/pages/scene.js`),
  })
}