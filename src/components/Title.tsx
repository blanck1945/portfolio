import React from "react"
import Underline from "./Atoms/Underline"

interface TitleProps {
  children: string
}

const Title = ({ children }: TitleProps) => {
  const title = children || "Default Title"

  return (
    <div className="section-title">
      <h2>{title}</h2>
      <Underline />
    </div>
  )
}

export default Title
