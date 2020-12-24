import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Underline from "./Atoms/Underline"

const query = graphql`
  {
    allStrapiJobs(sort: { order: DESC, fields: id }) {
      nodes {
        company
        date
        desc {
          name
          id
        }
        id
        position
      }
    }
  }
`

const Jobs = () => {
  const {
    allStrapiJobs: { nodes: jobs },
  } = useStaticQuery(query)

  const [value, setValue] = React.useState<number>(0)

  const jobsDis = jobs.map(({ company, id }, index) => (
    <button
      key={id}
      onClick={() => setValue(index)}
      className={`job-btn ${index === value && "active-btn"}`}
    >
      {company}
    </button>
  ))

  const { company, id, position, date, desc } = jobs[value]

  const jobsData = (
    <article className="job-info" key={id}>
      <h3>{position}</h3>
      <h4>{company}</h4>
      <p className="job-date">{date}</p>
      {desc.map(({ id, name }) => (
        <div className="job-desc" key={id}>
          <FaAngleDoubleRight className="job-icon" />
          <p>{name}</p>
        </div>
      ))}
    </article>
  )

  return (
    <section className="section jobs">
      <Title>Expierience</Title>
      <div className="jobs-center">
        <div className="btn-container">{jobsDis}</div>
        <div>{jobsData}</div>
      </div>
      <Link to="/about" className="btn center-btn">
        More Info
      </Link>
    </section>
  )
}

export default Jobs
