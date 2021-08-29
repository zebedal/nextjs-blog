import Logo from './Logo'
import Link from 'next/link'
import styles from './Navigation.module.css'

function Navigation() {
    return (
        <header className={styles.header}>
            <Link href="/"><a><Logo /></a></Link>
            <nav>
                <ul>
                    <li><Link href="/posts">Posts</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation
