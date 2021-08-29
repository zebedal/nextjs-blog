import styles from './FeaturedPosts.module.css'
import PostsGrid from '../posts/PostsGrid'

function FeaturedPosts(props) {

    console.log(props.posts)
    return (
        <section className={styles.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={props.posts}/>
        </section>
    )
}

export default FeaturedPosts
