
import './Layout.css'
import { Outlet } from 'react-router-dom';
import { Header } from '../pages/Header.jsx'

function Layout () {
  return (
    <div className={"layout-wrapper"}>
      <Header />
      <div className={"page-content"}>
        <Outlet />
      </div>
    </div>
  )
}

export { Layout }
