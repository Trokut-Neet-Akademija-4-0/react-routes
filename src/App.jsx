import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Blog } from './pages/Blog.jsx'
import { Page } from './pages/Page.jsx'
import { ErrorPage } from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import { Hugo } from './pages/Hugo.jsx'
import { Layout } from './components/Layout.jsx'
import { HugoChild } from './pages/HugoChild.jsx'
import { SinglePost } from './pages/SinglePost.jsx'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/blog" element={<Blog />}>
              <Route path={'/blog/:id'} element={<SinglePost />} />
            </Route>
            <Route path='/contact' element={<Page title={'Contact page'} />} />
            <Route path='/hugo' element={<Hugo />} >
              <Route path='/hugo/1' element={<HugoChild title={'Hugo page 1 subtitle'} />} />
              <Route path='/hugo/*' element={<HugoChild title={'No such Hugo page found'} />} />
            </Route>
            <Route path='/privacy-policy' element={<Page title={"Privacy Policy"}/>} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
