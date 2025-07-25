import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="m-4">
      <div className="flex justify-center divide-x-1 divide-purple-300 divide-solid ">
        <Link to="/" className="flex-1 navbar-item md:text-3xl">Ryan Geary</Link>
        <Link to="/projects" className="flex-none navbar-item">Projects</Link>
        <Link to="/posts" className="flex-none navbar-item">Posts</Link>
      </div>
    </nav>
  )
}

export default Navbar
