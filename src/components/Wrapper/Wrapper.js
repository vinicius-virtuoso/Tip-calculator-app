import React from 'react'
import Bill from './Bill'
import Results from './Results'
import styles from './Wrapper.module.css'

const Wrapper = () => {
  return (
    <section className={`${styles.Wrapper} Container`}>
      <Results/>
      <Bill/>
    </section>
  )
}

export default Wrapper
