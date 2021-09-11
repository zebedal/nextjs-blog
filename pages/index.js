import { Fragment } from 'react'
import Hero from '../components/homepage/Hero'
import FeaturedPosts from '../components/homepage/FeaturedPosts'
import  {getFeaturedPosts} from '../lib/posts-util'
import Head from 'next/head'




export default function HomePage(props) {

  return (
    <Fragment>
      <Head>
        <title>Sergios Blog</title>
        <meta name="description" content="I post about web development"></meta>
      </Head>
      <Hero />
       <FeaturedPosts posts={props.posts}/>

    </Fragment>

  )
}



export  function getStaticProps() {

  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 120
  }
}
