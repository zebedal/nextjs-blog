import styles from './PostsGrid.module.css'
import PostItem from './PostItem'

function PostsGrid(props) {

    
    return (
        <ul className={styles.grid}>
            {props.posts.map(post => <PostItem post={post} key={post.slug} />)}
        </ul>
    )
}

export default PostsGrid
