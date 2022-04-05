import './App.css'
import Header from './components/Header'
import About from './components/About'
import PlayButton from './components/PlayButton'

export default function App() {

  return (
    <main className="app-main">
      <Header/>
      <About/>
      <PlayButton/>
    </main>
  )
}

