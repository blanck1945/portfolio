import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const Blog = ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <section className="blog-pag">
        <Blogs blogs={blogs} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs(sort: { fields: date, order: DESC }) {
      nodes {
        id
        title
        slug
        desc
        date(formatString: "MMMM Do, YYYY")
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

//![goddes3.jpg](http://localhost:1337/uploads/goddes3_410864eea7.jpg)

export default Blog
