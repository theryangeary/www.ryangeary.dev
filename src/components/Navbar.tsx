import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="mb-8">
      <div className="flex justify-center space-x-6">
        <Link to="/" className="btn">Home</Link>
        <Link to="/projects" className="btn">Projects</Link>
        <Link to="/blog" className="btn">Blog</Link>
      </div>
    </nav>
  )
}

export default Navbar