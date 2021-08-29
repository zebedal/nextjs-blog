import styles from './Hero.module.css'
import Image from 'next/image'


function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image src="/assets/img/hero.jpg" alt="an image showins sergio" width={300} height={300} />
            </div>
            <h1>Hi im Sergio</h1>
            <p>I blog about web development - especially about react and next js</p>
        </section>
    )
}

export default Hero
