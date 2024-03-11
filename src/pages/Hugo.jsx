import { Link, Outlet } from 'react-router-dom'

export const Hugo = () => {
  return (
    <div className={'hugo-wrapper'}>
      <h1>Hugo page</h1>
      <Link to={'/hugo/1'}>
        <button>
          Go to child page
        </button>
      </Link>
      <Outlet />
    </div>

  )
}
