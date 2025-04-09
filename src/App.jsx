import React from 'react'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Form from './components/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Read from './components/Read'
import Service from './components/Service'
import Login from './components/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Form />} />
          {/* <Route path='/' element={<Login />} /> */}

          <Route path='/read' element={<Read />} />
          <Route path='/service' element={<Service />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
