import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/contact">Go to contact</Link>
      <Link to="/privacy-policy" >Privacy Policy</Link>
    </div>
  )
}
