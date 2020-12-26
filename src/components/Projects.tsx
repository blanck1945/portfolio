import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

export interface StackInterface {
  id: number
  env: string
  tech: string
}

export interface ProjectInterface {
  id: string
  title: string
  feature: boolean
  description: string
  image: any
  github: string
  url: string
  stack: StackInterface[]
  index?: number
}

interface ProjectsProps {
  projects: ProjectInterface[]
}

const Projects = ({ projects }: ProjectsProps) => {
  const titleDis = projects.length === 3 ? "Featured Projects" : "All Projects"

  const linkBtn =
    projects.length === 3 ? (
      <Link className="btn center-btn" to="/projects">
        Projects
      </Link>
    ) : null

  const projectsDis = projects.map(
    (project: ProjectInterface, index: number) => {
      const indexProject = {
        ...project,
        index,
      }
      return <Project key={project.id} project={indexProject} />
    }
  )

  return (
    <section className="section projects">
      <Title>{titleDis}</Title>
      <div className="section-center projects-center">{projectsDis}</div>
      {linkBtn}
    </section>
  )
}

export default Projects
