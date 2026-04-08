import Nav      from './components/Nav'
import Hero     from './components/Hero'
import About    from './components/About'
import Plants   from './components/Plants'
import Features from './components/Features'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Plants />
        <Features />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
