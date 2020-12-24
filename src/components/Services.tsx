import React from "react"
import Title from "./Title"
import { services, ServiceInterface } from "../constants/services"
import Underline from "./Atoms/Underline"
import * as styles from "./Services.module.scss"

const Services = () => {
  const serviceCard = services.map(
    ({ id, icon, title, text }: ServiceInterface) => (
      <article key={id} className={styles.service}>
        {icon}
        <h4>{title}</h4>
        <Underline />
        <p>{text}</p>
      </article>
    )
  )

  return (
    <section className="section bg-grey">
      <Title>Services</Title>
      <div className="section-center services-center">{serviceCard}</div>
    </section>
  )
}

export default Services
