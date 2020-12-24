import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import * as styles from "./Hero.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/SocialLinks"
import Underline from "./Atoms/Underline"

const query = graphql`
  {
    file(relativePath: { eq: "profile-img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <Underline />
            <h1>Augusto Pastrana</h1>
            <h4>Web and Mobile Developer</h4>
            <Link to="/contact" className="btn">
              Contact Me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <div className={styles.roudedBorder}>
          <Image fluid={fluid} alt="profile" className={styles.heroImg} />
        </div>
      </div>
    </header>
  )
}

export default Hero
