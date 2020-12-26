import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { BlogInterface } from "./Blogs"

interface BlogProps {
  blog: BlogInterface
}

const Blog = ({ blog }: BlogProps) => {
  const {
    id,
    title,
    content,
    date,
    slug,
    category,
    desc,
    image: {
      childImageSharp: { fluid },
    },
  } = blog

  return (
    <Link to={`/blogs/${slug}`} className="blog" key={id}>
      <article>
        <Image fluid={fluid} alt="blog-img" className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc.substring(0, 120) + "..."}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Blog
