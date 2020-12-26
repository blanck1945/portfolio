const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.blogs.nodes.forEach(({ slug }) => {
    createPage({
      path: `/blogs/${slug}`,
      component: path.resolve("./src/templates/blog-template.tsx"),
      context: {
        slug,
      },
    })
  })
}
