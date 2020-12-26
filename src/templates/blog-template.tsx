import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import Image from "gatsby-image"
import "./blog-template.scss"

const ComponentName = ({
  data: {
    blog: {
      content,
      image: {
        childImageSharp: { fluid },
      },
    },
  },
}) => {
  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <Image fluid={fluid} alt="blog-img" className="blog-unique" />
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="btn center-btn">
            Blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default ComponentName
