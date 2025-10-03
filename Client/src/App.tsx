import { Header } from "./Components/Header"
import { Banner } from "./Components/Banner"
import { About } from "./Components/AboutMe"
import { Skills } from "./Components/Skills"
import { Proyectos } from "./Components/Proyects"
import { Contact } from "./Components/Contact"

function App() {
  return (
    <main className="w-full h-auto flex flex-col items-center Linear-Banner">
      <Header/>
      <Banner/>
      <About/>
      <Skills/>
      <Proyectos/>
      <Contact/>
    </main>
  )
}

export default App
