import styles from './all-posts.module.css'
import PostsGrid from './PostsGrid'

const AllPosts = props => {

    return (

        <section className={styles.posts}>
            <h1>All Posts</h1>
            <PostsGrid posts={props.posts} />
        </section>
    )
}
export default AllPosts