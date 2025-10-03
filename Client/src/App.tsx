import { Header } from "./Components/Header"
import { Banner } from "./Components/Banner"
import { About } from "./Components/AboutMe"
import { Skills } from "./Components/Skills"

function App() {
  return (
    <main className="w-full h-auto flex flex-col items-center Linear-Banner">
      <Header/>
      <Banner/>
      <About/>
      <Skills/>
    </main>
  )
}

export default App
