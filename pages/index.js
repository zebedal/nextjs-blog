import { Fragment } from 'react'
import Hero from '../components/homepage/Hero'
import FeaturedPosts from '../components/homepage/FeaturedPosts'

export default function HomePage() {

  const DUMMY_POSTS = [
    {
      title: "Getting started with next js",
      slug: "getting-started-with-nextjs",
      image: "getting-started-with-nextjs.png",
      excerpt: "Next js is an awesome tool that allows you to build web sites with SEO capabilities",
      date: "10-06-2022"
    },
    {
      title: "Getting started with next js2",
      slug: "getting-started-with-nextjs2",
      image: "getting-started-with-nextjs.png",
      excerpt: "Next js is an awesome tool that allows you to build web sites with SEO capabilities",
      date: "10-06-2022"
    },
    {
      title: "Getting started with next js3",
      slug: "getting-started-with-nextjs3",
      image: "getting-started-with-nextjs.png",
      excerpt: "Next js is an awesome tool that allows you to build web sites with SEO capabilities",
      date: "10-06-2022"
    },
    {
      title: "Getting started with next js4",
      slug: "getting-started-with-nextjs4",
      image: "getting-started-with-nextjs.png",
      excerpt: "Next js is an awesome tool that allows you to build web sites with SEO capabilities",
      date: "10-06-2022"
    }
  ]

  return (
    <Fragment>
      <Hero />
       <FeaturedPosts posts={DUMMY_POSTS}/>

    </Fragment>



    //Hero section
    //Featured posts
  )
}
