import './Portfolio.css'
import Works from './Works'

const Portfolio = () => {
  return (
        <section className='work section' id='portfolio'>
            <h2 className="section__title">My Portfolio</h2>
            <span className='section__subtitle'>Most recent Works</span>
            <Works/>
        </section>
  )
}

export default Portfolio