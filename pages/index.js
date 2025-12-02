import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Frederick Addai | Full-Stack Developer</title>
        <meta name="description" content="Portfolio of Frederick Addai, a Full-Stack Developer specializing in React and Next.js." />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Frederick Addai | Web Developer" />
        <meta property="og:description" content="Check out my latest web development projects and skills." />
        <meta property="og:type" content="website" />
      </Head>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}