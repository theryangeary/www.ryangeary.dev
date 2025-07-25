import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import headshot from '/headshot.jpg'
import './App.css'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import BlogPostPage from './pages/BlogPostPage'

function Home() {
  return (
    <div className="container mx-auto px-4 flex h-screen">
      <div className="m-auto">
      <h1 className="font-bold underline p-4 text-violet-900/50 dark:text-violet-300">
          <span className="text-4xl md:text-6xl lg:text-8xl">
              Ryan Geary
          </span>
      </h1>

      <p className="flex justify-center text-indigo-900 dark:text-indigo-200">Software Engineer @Lyft</p>
      <p className="flex justify-center text-indigo-900 dark:text-indigo-200">FOSS Developer</p>

      <div className="flex justify-center">
        <img src={headshot} alt="a pic of me" className="w-3xs rounded-full p-10 " />
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <a href="/projects" className="btn">Projects</a>
        <a href="/posts" className="btn">Posts</a>
        <a target="_blank" href="https://github.com/theryangeary/" className="btn">Github</a>
        <a target="_blank" href="https://www.linkedin.com/in/theryangeary/" className="btn">LinkedIn</a>
      </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </Router>
  )
}

export default App
