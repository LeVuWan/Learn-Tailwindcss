import './App.css'
import AuthButtons from './components/authButtons'
import Nav from './components/nav/nav'
import Trending from './components/trending'
import Header from './components/Header'

function App() {


  return (
    <div className='grid md:grid-cols-5'>
      <Nav />
      <main className='grid md:col-span-4 bg-cyan-50 px-12 py-16'>
        <AuthButtons />
        <Header />
        <Trending />
      </main>

    </div>
  )
}

export default App
