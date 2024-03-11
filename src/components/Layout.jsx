
import './Layout.css'
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={'header-nav'}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/hugo">Hugo</Link>
        </li>
      </ul>
    </nav>
  )
}
function Layout () {
  return (
    <div className={"layout-wrapper"}>
      <Navigation />
      <div className={"page-content"}>
        <Outlet />
      </div>
    </div>
  )
}

export { Layout }
