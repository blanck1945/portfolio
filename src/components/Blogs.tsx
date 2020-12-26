import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"

export interface BlogInterface {
  id: string
  title: string
  desc: string
  content?: string
  slug: string
  date: string
  image: any
  category: string
}

interface BlogsProps {
  blogs: BlogInterface[]
}

export const Blogs = ({ blogs }: BlogsProps) => {
  const titleDis = blogs.length === 3 ? "Recent Blogs" : "All Blogs"

  const linkBtn =
    blogs.length === 3 ? (
      <Link className="btn center-btn" to="/blog">
        Blog
      </Link>
    ) : null

  const blogDis = blogs.map(blog => <Blog key={blog.id} blog={blog} />)

  return (
    <section className="section">
      <Title>{titleDis}</Title>
      <div className="section-center blogs-center">{blogDis}</div>
      {linkBtn}
    </section>
  )
}
export default Blogs
