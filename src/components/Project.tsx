import React from "react"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { ProjectInterface } from "./Projects"
import "./Project.scss"

interface IndexProject extends ProjectInterface {
  index: number
}

interface ProjectProps {
  project: IndexProject
}

const Project = ({ project }: ProjectProps) => {
  const {
    id,
    title,
    description,
    github,
    url,
    stack,
    index,
    image: {
      childImageSharp: { fluid },
    },
  } = project

  const stackFE = stack.map(({ id, env, tech }) => {
    if (env === "FE") {
      return <span key={id}>{tech}</span>
    }
  })

  const stackBE = stack.map(({ id, env, tech }) => {
    if (env === "BE") {
      return <span key={id}>{tech}</span>
    }
  })

  return (
    <article className="project">
      <Image fluid={fluid} alt="project-img" className="project-img" />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="techDiv">
          <div className="project-stack">
            <p>Front-End</p>
            {stackFE}
          </div>
          <div className="project-stack">
            <p>Back-End</p>
            {stackBE}
          </div>
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
