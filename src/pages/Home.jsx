import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/contact"><button>Go to contact</button></Link>
      &nbsp;&nbsp;
      <Link to="/privacy-policy" ><button>Privacy Policy</button></Link>
    </div>
  )
}
