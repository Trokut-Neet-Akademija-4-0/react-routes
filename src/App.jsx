import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Blog } from './pages/Blog.jsx'
import { Contact } from './pages/Contact.jsx'
import { ErrorPage } from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import { Layout } from './components/Layout.jsx'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/hugo' element={<Home />} />
            <Route path='/privacy-policy' element={<Contact title={"Privacy Policy"}/>} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
