
import './Layout.css'
import { Link, Outlet } from 'react-router-dom';

function Layout () {
  return (
    <div className={"layout-wrapper"}>
      <nav className={'header-nav'}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/hugo">Hugo</Link>
          </li>
        </ul>
      </nav>
      <div className={"page-content"}>
        <Outlet />
      </div>
    </div>
  )
}

export { Layout }
