import { Header } from "./Components/Header"
import { Banner } from "./Components/Banner"
import { About } from "./Components/AboutMe"
import { Skills } from "./Components/Skills"
import { Proyectos } from "./Components/Proyects"
import { Contact } from "./Components/Contact"
import { Footer } from "./Components/Footer"

function App() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center Linear-Banner bg-black text-white overflow-x-hidden">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Proyectos />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
