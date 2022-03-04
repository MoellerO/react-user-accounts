import './App.css'
import { Header } from './components/Header'

function App() {
  const todos = [{ id: 1, title: 'Finnish work', complete: false }, { id: 2, title: 'Read Books', complete: false }]

  return (
    <>
      <Header />
    </>
  )
}

export default App
