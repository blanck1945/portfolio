import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <section className="project-page">
        <Projects projects={projects} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(sort: { fields: id, order: ASC }) {
      nodes {
        id
        title
        description
        github
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          env
          tech
        }
      }
    }
  }
`

export default ProjectsPage
