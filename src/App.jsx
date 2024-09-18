import {BrowserRouter as Router } from 'react-router-dom'
import Layout from './layouts'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
    <Toaster />
      <Router>
        <Layout />
      </Router>
    </>
  )
}

export default App
