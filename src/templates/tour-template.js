import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import styles from '../css/template.module.css'
import Image from 'gatsby-image'
import { FaMoneyBillWave, FaMap } from 'react-icons/fa'

const TourTemplate = ({ data }) => {
  const { name, price, country, days, description: { description }, images, start, journey } = data.tour
  
  return (  
    <Layout>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {images.map((item, index) => 
              <Image key={index} fluid={item.fluid} className={styles.image} alt={name} />
            )}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration : {days} days</h4>
          <p className={styles.desc}>{description}</p>
          <h2>daily schedules</h2>
          <ul className={styles.journey}>
            {journey.map((item, index) => (
              <li key={index}>{item.day}</li>
            ))}
          </ul>
          <Link to="/tours">back to tours</Link>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
query($slug:String!) {
  tour:contentfulTour(slug: {eq: $slug}) {
    name
    price
    country
    days
    start(formatString:"dddd MMMM Do, YYYY")
    journey {
      day
      info
    }
    description {
      description
    }
    images {
      fluid {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
}
`
 
export default TourTemplate;