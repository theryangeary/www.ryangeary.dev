import headshot from '/headshot.jpg'
import './App.css'

function App() {
  return (
    <>
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold underline p-4 text-violet-900/50">
                Ryan Geary
            </h1>

            <div className="flex justify-center">
                <img src={headshot} alt="a pic of me" className="w-3xs rounded-full p-10 " />
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <a href="/projects" className="btn">Projects</a>
                <a href="/blog" className="btn">Blog</a>
                <a target="_blank" href="https://github.com/theryangeary/" className="btn">Github</a>
                <a target="_blank" href="https://www.linkedin.com/in/theryangeary/" className="btn">LinkedIn</a>
            </div>
        </div>
    </>
  )
}

export default App
