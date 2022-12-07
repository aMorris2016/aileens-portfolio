import Head from 'next/head'
import Nav from '../components/nav';
import Hero from '../components/hero';
import Projects from '../components/projects';
import About from '../components/about';
import Contact from '../components/contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aileen Morris | Data Analytics</title>
        <meta name="description" content="Portfolio for Aileen Morris the Data Analyst" />
        <link 
          rel="icon" 
          href="/bobagirl.png" 
          type="image/png"
        />
      </Head>

      <Nav />

      <Hero />

      <main>
        <Projects />

        <About />
      </main>

      <Contact />
    </div>
  )
}
